import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import * as serializer from '../../serializer.js';
import { v4 as uuid } from 'uuid';
import * as shape from 'd3-shape';
import { GraphDialogComponent } from '../../components/graph-dialog/graph-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnDestroy {

  private refreshGraphEventSubscription: any;
  @Input() refreshGraphEvent: Observable<void>;

  @Input() inputText: string;
  @Input() heightMultiplier: number;
  @Input() showOpenDialog: boolean;

  zoomToFit$: Subject<any> = new Subject();
  links = [];
  nodes = [];
  graphViewBox = [];
  curve = shape.curveMonotoneX;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (this.refreshGraphEvent) {
      this.refreshGraphEventSubscription = this.refreshGraphEvent.subscribe(() => this.refreshView());
    }
    this.graphViewBox = [window.innerWidth - 16, (window.innerHeight * this.heightMultiplier) + 42];
    this.showGraph();
  }

  ngOnDestroy() {
    if (this.refreshGraphEventSubscription) {
      this.refreshGraphEventSubscription.unsubscribe();
    }
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
    const charts = document.getElementsByClassName('ngx-charts');
    return charts[charts.length - 1];
  }

  refreshView() {
    this.links = [];
    this.nodes = [];
    this.showGraph();
  }

  showGraph() {
    const root = serializer.node('root');
    const preProcessedText = this.inputText.toString().replace(/^\s*[\r\n]/gm, '');
    preProcessedText.split('\n').reduce(serializer.append_rec, root);
    this.createNodeList(root);
    this.getGraphSVG().setAttribute('fill', 'white');
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
    } else if (nodeData.label.includes('[⚠️]')) {
      nodeData.label = nodeData.label.replace('[⚠️]', '');
      nodeData.boxColor = '#f6e58d';
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

  openGraphDialog() {
    this.dialog.open(GraphDialogComponent, {
      panelClass: 'full-width-dialog',
      data: {
        inputText: this.inputText
      }
    });
  }

}
