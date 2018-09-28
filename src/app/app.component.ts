import { Component, OnInit } from '@angular/core';
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
  links = [];
  nodes = [];
  curve = shape.curveMonotoneX;
  inputText = `

# Roteiro de teste app do twitter

- listas com - não são renderizadas no diagrama
     - item de lista interno

+ outro caso de teste
    + outro nó

+ Entrar no app do twitter
    + (Abrir tela home) Tela home aberta [✔]

        A tela home é uma tela top com os tweet tudo
        + (Botão novo tweet não exibido) Exibir mensagem de erro
        + Exibir tela de novo tweet (Clicar no botão novo tweet)
            + Descrição do fluxo da tela de novo tweet

            + Exibir mensagem de erro (Exibir qualquer outra tela)
    + (Exibir qualquer outra tela) [❌]  Exibir mensagem de erro
`;

  ngOnInit(): void {
    this.showGraph();
  }

  getGraphSVG() {
    const graphSVG = document.getElementsByClassName('ngx-charts')[0];
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
}
