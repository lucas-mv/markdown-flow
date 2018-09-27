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
  curve = shape.curveBundle.beta(1);
  inputText = `

  # Roteiro de teste app do twitter

  - Entrar no app do twitter
      - Tela home aberta
  
          A tela home é uma tela top com os tweet tudo
          - Botão novo tweet não exibido
          
              Exibir mensagem de erro
          - Clicar no botão novo tweet
              - Exibir tela de novo tweet
                  
                  Descrição do fluxo da tela de novo tweet
              - Exibir qualquer outra tela
                  
                  Exibir mensagem de erro
      - Exibir qualquer outra tela
      
          Exibir mensagem de erro
  `;

  ngOnInit(): void {
    this.showGraph();
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
    if (!node.title || node.title === null || node.title === '') {
      return;
    }

    const nodeId = uuid();

    this.nodes.push({
      id: nodeId,
      label: node.title
    });

    if (parentId !== null) {
      this.links.push({
        source: parentId,
        target: nodeId
      });
    }

    if (node.children !== []) {
      for (let nodeIndex = 0; nodeIndex < node.children.length; nodeIndex++) {
        this.createNode(node.children[nodeIndex], nodeId);
      }
    }
  }

  // showGraph() {
  //   this.hierarchialGraph.nodes = [
  // {
  //   id: 'start',
  //   label: 'scan',
  //   position: 'x0'
  // }, {
  //   id: '1',
  //   label: 'Event#a',
  //   position: 'x1'
  // }, {
  //   id: '2',
  //   label: 'Event#x',
  //   position: 'x2'
  // }, {
  //   id: '3',
  //   label: 'Event#b',
  //   position: 'x3'
  // }, {
  //   id: '4',
  //   label: 'Event#c',
  //   position: 'x4'
  // }, {
  //   id: '5',
  //   label: 'Event#y',
  //   position: 'x5'
  // }, {
  //   id: '6',
  //   label: 'Event#z',
  //   position: 'x6'
  // }
  // ];

  // this.hierarchialGraph.links = [
  // {
  //   source: 'start',
  //   target: '1',
  //   label: 'Process#1'
  // }, {
  //   source: 'start',
  //   target: '2',
  //   label: 'Process#2'
  // }, {
  //   source: '1',
  //   target: '3',
  //   label: 'Process#3'
  // }, {
  //   source: '2',
  //   target: '4',
  //   label: 'Process#4'
  // }, {
  //   source: '2',
  //   target: '6',
  //   label: 'Process#6'
  // }, {
  //   source: '3',
  //   target: '5'
  // }
  // ];

  // }
}
