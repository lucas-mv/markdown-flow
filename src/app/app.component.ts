import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as serializer from './serializer.js';
import { v4 as uuid } from 'uuid';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'app';
  zoomToFit$: Subject<any> = new Subject();
  links = [];
  nodes = [];
  curve = shape.curveMonotoneX;
  inputText = `# Roteiro de teste app do twitter

Qualquer texto que não seja escrito como uma lista criada com o identificador + não será renderizado no diagrama.

## Subtópico

Este é um subtópico e funciona normalmente.

- listas com - não são renderizadas no diagrama
     - item de lista interno

+ Entrar no app do twitter
    + (Abrir tela home) Tela home aberta [✔]

        A tela home é uma tela top com os tweet tudo
        + (Botão novo tweet não exibido) Exibir mensagem de erro
        + Exibir tela de novo tweet (Clicar no botão novo tweet)
            + Descrição do fluxo da tela de novo tweet

            + Exibir mensagem de erro (Exibir qualquer outra tela)
    + (Exibir qualquer outra tela) [❌]  Exibir mensagem de erro

+ outro caso de teste
    + outro nó
`;

  ngOnInit(): void {
    this.showGraph();
    this.getGraphSVG().setAttribute('fill', 'white');
  }

  fitToView() {
    this.zoomToFit();
  }

  export() {
    const svgElement = this.getGraphSVG();
    this.saveSvg(svgElement, 'diagrama');
  }

  saveSvg(svgEl, name) {
    svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgData = svgEl.outerHTML;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgBlob = new Blob([preface, svgData], {type: 'image/svg+xml;charset=utf-8'});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

  getGraphSVG() {
    return document.getElementsByClassName('ngx-charts')[0];
  }

  refreshViews() {
    this.links = [];
    this.nodes = [];
    this.showGraph();
  }

  showGraph() {
    const root = serializer.node('root');
    const preProcessedText = this.inputText.toString().replace(/^\s*[\r\n]/gm, '');
    preProcessedText.split('\n').reduce(serializer.append_rec, root);
    this.createNodeList(root);
  }

  createNodeList(root) {
    if (root.children !== []) {
      for (let nodeIndex = 0; nodeIndex < root.children.length; nodeIndex++) {
        this.createNode(root.children[nodeIndex], null);
      }
    }
  }

  createNode(node, parentId) {
    if (!node.title || node.title === null || node.title.replace(/\s/g, '') === '' || !node.title.trimStart().startsWith('+')) {
      return;
    }

    const nodeId = uuid();

    const nodeData = {
      id: nodeId,
      label: node.title.trimStart().replace('+', ''),
      boxColor: '#c7ecee'
    };

    if (nodeData.label.includes('[✔]')) {
      nodeData.label = nodeData.label.replace('[✔]', '');
      nodeData.boxColor = '#badc58';
    } else if (nodeData.label.includes('[❌]')) {
      nodeData.label = nodeData.label.replace('[❌]', '');
      nodeData.boxColor = '#eb4d4b';
    }

    let linkLabel = '';
    const nodeDescription = nodeData.label.match(/\((.*?)\)/);
    if (nodeDescription) {
      nodeData.label = nodeData.label.replace(nodeDescription[0], '');
      linkLabel = nodeDescription[0].replace('(', '').replace(')', '');
    }

    this.nodes.push(nodeData);

    if (parentId !== null) {
      this.links.push({
        source: parentId,
        target: nodeId,
        label: linkLabel
      });
    }

    if (node.children !== []) {
      for (let nodeIndex = 0; nodeIndex < node.children.length; nodeIndex++) {
        this.createNode(node.children[nodeIndex], nodeId);
      }
    }
  }

  zoomToFit() {
    this.zoomToFit$.next(true);
  }
}
