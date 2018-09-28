(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'Ubuntu' !important;\r\n    src: url('https://lucas-mv.github.io/markdown-flow/assets/fonts/ubuntu-font-family-0.83/Ubuntu-R.ttf');\r\n }\r\n\r\n.main-grid{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr;\r\n  -ms-grid-rows: 1fr 1fr;\r\n      grid-template-rows: 1fr 1fr;\r\n  width: 99vw;\r\n  height: 97vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.markdown-input-container{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 1 /span 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 1;\r\n  grid-column: 1 /span 1;\r\n}\r\n\r\n.markdown-input{\r\n    max-height: 45vh;\r\n    min-height: 45vh;\r\n    height: 45vh;\r\n}\r\n\r\n.markdown-output-container{\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-row-span: 1;\r\n    grid-row: 1 /span 1;\r\n    -ms-grid-column: 2;\r\n    -ms-grid-column-span: 1;\r\n    grid-column: 2 /span 1;\r\n    max-height: 48.5vh;\r\n    min-height: 48.5vh;\r\n    height: 48.5vh;\r\n    overflow: auto;\r\n}\r\n\r\n.test-graph-container{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  height: 48.5vh;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-row-span: 1;\r\n  grid-row: 2 /span 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 2;\r\n  grid-column: 1 /span 2;\r\n}\r\n\r\n.graph {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.graph .edge {\r\n  stroke: #666;\r\n  fill: none;\r\n}\r\n\r\n.graph .edge .edge-label {\r\n  stroke: none;\r\n  font-size: 12px;\r\n  fill: #666;\r\n}\r\n\r\n.graph .panning-rect {\r\n  fill: transparent;\r\n  cursor: move;\r\n}\r\n\r\n.graph .node-group .node:focus {\r\n  outline: none;\r\n}\r\n\r\n.graph {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.graph .edge {\r\n  stroke: #666;\r\n  fill: none;\r\n}\r\n\r\n.graph .edge .edge-label {\r\n  stroke: none;\r\n  font-size: 12px;\r\n  fill: #666;\r\n}\r\n\r\n.graph .panning-rect {\r\n  fill: transparent;\r\n  cursor: move;\r\n}\r\n\r\n.graph .node-group .node:focus {\r\n  outline: none;\r\n}\r\n\r\n.edge {\r\n  path {\r\n    stroke: #666 !important;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-grid\">\n\n  <mat-form-field class=\"markdown-input-container markdown-input\">\n    <textarea class=\"markdown-input\" matInput placeholder=\"Markdown\" [(ngModel)]=\"inputText\" (change)=\"refreshViews()\"></textarea>\n  </mat-form-field>\n\n  <markdown class=\"markdown-output-container\" [data]=\"inputText\"></markdown>\n\n  <div class=\"test-graph-container\">\n\n    <ngx-graph\n    id=\"main-graph\"\n    class=\"chart-container\"\n    [links]=\"links\"\n    [nodes]=\"nodes\"\n    [legend]=\"false\"\n    [curve]=\"curve\"\n    [draggingEnabled]=\"true\">\n\n    <ng-template #defsTemplate>\n      <svg:marker id=\"arrow\" viewBox=\"0 -5 10 10\" refX=\"8\" refY=\"0\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\">\n        <svg:path d=\"M0,-5L10,0L0,5\" class=\"arrow-head\" />\n      </svg:marker>\n    </ng-template>\n\n    <ng-template #nodeTemplate let-node>\n      <svg:g class=\"node\">\n        <svg:rect [attr.width]=\"node.width\" [attr.height]=\"node.height\" [attr.fill]=\"node.boxColor\" rx=\"15\" ry=\"15\" />\n        <svg:text alignment-baseline=\"central\" [attr.x]=\"10\" [attr.y]=\"node.height / 2\">{{node.label}}</svg:text>\n      </svg:g>\n    </ng-template>\n\n    <ng-template #linkTemplate let-link>\n      <svg:g class=\"edge\">\n        <svg:path\n          class=\"line\"\n          stroke-width=\"2\"\n          marker-end=\"url(#arrow)\" >\n        </svg:path>\n        <svg:text\n          class=\"edge-label\"\n          text-anchor=\"middle\">\n        <textPath\n          style=\"fill: #666;\"\n          [attr.href]=\"'#' + link.id\"\n          startOffset=\"60%\">\n          {{link.label}}\n        </textPath>\n      </svg:text>\n      </svg:g>\n    </ng-template>\n\n    </ngx-graph>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _serializer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serializer.js */ "./src/app/serializer.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.links = [];
        this.nodes = [];
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"];
        this.inputText = "\n\n# Roteiro de teste app do twitter\n\n- listas com - n\u00E3o s\u00E3o renderizadas no diagrama\n     - item de lista interno\n\n+ outro caso de teste\n    + outro n\u00F3\n\n+ Entrar no app do twitter\n    + (Abrir tela home) Tela home aberta [\u2714]\n\n        A tela home \u00E9 uma tela top com os tweet tudo\n        + (Bot\u00E3o novo tweet n\u00E3o exibido) Exibir mensagem de erro\n        + Exibir tela de novo tweet (Clicar no bot\u00E3o novo tweet)\n            + Descri\u00E7\u00E3o do fluxo da tela de novo tweet\n\n            + Exibir mensagem de erro (Exibir qualquer outra tela)\n    + (Exibir qualquer outra tela) [\u274C]  Exibir mensagem de erro\n";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showGraph();
    };
    AppComponent.prototype.getGraphSVG = function () {
        var graphSVG = document.getElementsByClassName('ngx-charts')[0];
    };
    AppComponent.prototype.refreshViews = function () {
        this.links = [];
        this.nodes = [];
        this.showGraph();
    };
    AppComponent.prototype.showGraph = function () {
        var root = _serializer_js__WEBPACK_IMPORTED_MODULE_1__["node"]('root');
        var preProcessedText = this.inputText.toString().replace(/^\s*[\r\n]/gm, '');
        preProcessedText.split('\n').reduce(_serializer_js__WEBPACK_IMPORTED_MODULE_1__["append_rec"], root);
        this.createNodeList(root);
    };
    AppComponent.prototype.createNodeList = function (root) {
        if (root.children !== []) {
            for (var nodeIndex = 0; nodeIndex < root.children.length; nodeIndex++) {
                this.createNode(root.children[nodeIndex], null);
            }
        }
    };
    AppComponent.prototype.createNode = function (node, parentId) {
        if (!node.title || node.title === null || node.title.replace(/\s/g, '') === '' || !node.title.trimStart().startsWith('+')) {
            return;
        }
        var nodeId = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        var nodeData = {
            id: nodeId,
            label: node.title.trimStart().replace('+', ''),
            boxColor: '#c7ecee'
        };
        if (nodeData.label.includes('[✔]')) {
            nodeData.label = nodeData.label.replace('[✔]', '');
            nodeData.boxColor = '#badc58';
        }
        else if (nodeData.label.includes('[❌]')) {
            nodeData.label = nodeData.label.replace('[❌]', '');
            nodeData.boxColor = '#eb4d4b';
        }
        var linkLabel = '';
        var nodeDescription = nodeData.label.match(/\((.*?)\)/);
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
            for (var nodeIndex = 0; nodeIndex < node.children.length; nodeIndex++) {
                this.createNode(node.children[nodeIndex], nodeId);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-graph */ "./node_modules/@swimlane/ngx-graph/release/index.js");
/* harmony import */ var _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _swimlane_ngx_graph__WEBPACK_IMPORTED_MODULE_3__["NgxGraphModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/serializer.js":
/*!*******************************!*\
  !*** ./src/app/serializer.js ***!
  \*******************************/
/*! exports provided: node, append_rec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node", function() { return node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_rec", function() { return append_rec; });
function node(title,lvl){
    var children = [],
        parent = null;
    return {
        title:title,
        children:children,
        lvl:()=>lvl==undefined?-1:lvl,
        parent:()=>parent, //as a function to prevent circular reference when parse to JSON
        setParent:p=>{parent=p},
        appendChildren: function(c){
            children.push(c); 
            c.setParent(this);
            return this
        },
    }
}
function append_rec(prev,curr) {
    if(typeof(curr)=='string'){ //in the recursive call it's a object
        curr = curr.split('    ');//or tab (\t)
        curr = node(curr.pop(),curr.length);
    }
    if(curr.lvl()>prev.lvl()){//curr is prev's child
        prev.appendChildren(curr);
    }else if(curr.lvl()<prev.lvl()){
        append_rec(prev.parent(),curr) //recursive call to find the right parent level
    }else{//curr is prev's sibling
        prev.parent().appendChildren(curr);
    }

    return curr;
}

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DTI\Projetos\treeTest\testTree\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map