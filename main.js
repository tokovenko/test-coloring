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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/list-item/list-item.component.ts");




var routes = [{
        path: '',
        component: _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]
    }, {
        path: 'coloring/:alias',
        component: _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_3__["ListItemComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\">\n    <header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <img src=\"/assets/images/logo.svg\">\n    </header>\n    <content>\n        <router-outlet></router-outlet>\n    </content>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 40px;\n  background: #3f51b5;\n  z-index: 2; }\n  header img {\n    width: 30px; }\n  content {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvY29sb3ItYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixPQUFNO0VBQ04sU0FBUTtFQUNSLFFBQU87RUFDUCxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLFdBQVUsRUFLYjtFQVpEO0lBVVEsWUFBVyxFQUNkO0VBR0w7RUFDSSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGVBQWM7RUFDZCxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuXG5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'color-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-item/list-item.component */ "./src/app/list-item/list-item.component.ts");
/* harmony import */ var _svg_svg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/svg.component */ "./src/app/svg/svg.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _colors_palette_colors_palette_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./colors-palette/colors-palette.component */ "./src/app/colors-palette/colors-palette.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _colors_bottom_sheet_colors_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./colors-bottom-sheet/colors-bottom-sheet.component */ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [
                _colors_bottom_sheet_colors_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_15__["ColorsBottomSheetComponent"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ListItemComponent"],
                _svg_svg_component__WEBPACK_IMPORTED_MODULE_11__["SvgComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_12__["ColorsComponent"],
                _colors_palette_colors_palette_component__WEBPACK_IMPORTED_MODULE_13__["ColorsPaletteComponent"],
                _colors_bottom_sheet_colors_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_15__["ColorsBottomSheetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coloring.service.ts":
/*!*************************************!*\
  !*** ./src/app/coloring.service.ts ***!
  \*************************************/
/*! exports provided: ColoringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColoringService", function() { return ColoringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ColoringService = /** @class */ (function () {
    function ColoringService(http) {
        this.http = http;
        this.listUrl = 'assets/json/list.json';
    }
    ColoringService.prototype.getList = function () {
        if (!this.list) {
            this.list = this.http.get(this.listUrl);
        }
        return this.list;
    };
    ColoringService.prototype.getListItemById = function () {
        this.getList().subscribe(function (res) {
        });
    };
    ColoringService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ColoringService);
    return ColoringService;
}());



/***/ }),

/***/ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.html":
/*!************************************************************************!*\
  !*** ./src/app/colors-bottom-sheet/colors-bottom-sheet.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-colors (changeColor)=\"onChangePencilColor($event)\"></app-colors>"

/***/ }),

/***/ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/colors-bottom-sheet/colors-bottom-sheet.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbG9ycy1ib3R0b20tc2hlZXQvY29sb3JzLWJvdHRvbS1zaGVldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/colors-bottom-sheet/colors-bottom-sheet.component.ts ***!
  \**********************************************************************/
/*! exports provided: ColorsBottomSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsBottomSheetComponent", function() { return ColorsBottomSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ColorsBottomSheetComponent = /** @class */ (function () {
    function ColorsBottomSheetComponent(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
    }
    ColorsBottomSheetComponent.prototype.onChangePencilColor = function (color) {
        this.data.changeColor(color);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorsBottomSheetComponent.prototype, "changeColor", void 0);
    ColorsBottomSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors-bottom-sheet',
            template: __webpack_require__(/*! ./colors-bottom-sheet.component.html */ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.html"),
            styles: [__webpack_require__(/*! ./colors-bottom-sheet.component.scss */ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"], Object])
    ], ColorsBottomSheetComponent);
    return ColorsBottomSheetComponent;
}());



/***/ }),

/***/ "./src/app/colors-palette/colors-palette.component.html":
/*!**************************************************************!*\
  !*** ./src/app/colors-palette/colors-palette.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul fxLayout=\"row\" \n    (mousedown)=\"onMousedown($event)\"\n    (mousemove)=\"onMousemove($event)\">\n  <li *ngFor=\"let color of colors; let i = index;\"\n      fxFlex\n      [style.background-color]=\"color\"\n      [attr.data-color]=\"color\"\n      class=\"colors__item\"\n      [class.active]=\"i === colorIndex\"></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/colors-palette/colors-palette.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/colors-palette/colors-palette.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  height: 40px; }\n\n.colors__item.active {\n  position: relative; }\n\n.colors__item.active:after {\n    display: block;\n    content: ' ';\n    width: 10px;\n    height: 10px;\n    border: 10px solid #fff;\n    box-shadow: 0 0 10px grey, inset 0 0 10px grey;\n    position: absolute;\n    top: 5px;\n    left: -10px;\n    border-radius: 20px;\n    pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvY29sb3ItYXBwL3NyYy9hcHAvY29sb3JzLXBhbGV0dGUvY29sb3JzLXBhbGV0dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2Y7O0FBQ0Q7RUFFUSxtQkFBa0IsRUFjckI7O0FBaEJMO0lBSVksZUFBYztJQUNkLGFBQVk7SUFDWixZQUFXO0lBQ1gsYUFBWTtJQUNaLHdCQUF1QjtJQUN2QiwrQ0FBOEM7SUFDOUMsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbG9ycy1wYWxldHRlL2NvbG9ycy1wYWxldHRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLmNvbG9yc19faXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleSwgaW5zZXQgMCAwIDEwcHggZ3JleTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/colors-palette/colors-palette.component.ts":
/*!************************************************************!*\
  !*** ./src/app/colors-palette/colors-palette.component.ts ***!
  \************************************************************/
/*! exports provided: ColorsPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsPaletteComponent", function() { return ColorsPaletteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);



var ColorsPaletteComponent = /** @class */ (function () {
    function ColorsPaletteComponent() {
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.colors = [];
        this.colorIndex = 60;
        this.isMousedown = false;
    }
    ColorsPaletteComponent.prototype.onWindowMouseup = function () {
        this.isMousedown = false;
    };
    ColorsPaletteComponent.prototype.ngOnChanges = function () {
        this.colors = chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['white', this.color]).colors(60).concat(chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"]([this.color, 'black']).colors(60).slice(1));
        this.changeColor.emit(this.colors[this.colorIndex]);
    };
    ColorsPaletteComponent.prototype.onMousedown = function (e) {
        this.isMousedown = true;
        this.updateCurrentColor(e.target);
    };
    ColorsPaletteComponent.prototype.onMousemove = function (e) {
        if (!this.isMousedown) {
            return;
        }
        this.updateCurrentColor(e.target);
    };
    ColorsPaletteComponent.prototype.updateCurrentColor = function (element) {
        while (element) {
            if (element.dataset.color) {
                this.colorIndex = this.colors.indexOf(element.dataset.color);
                this.changeColor.emit(element.dataset.color);
                break;
            }
            element = element.parentElement;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorsPaletteComponent.prototype, "changeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorsPaletteComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorsPaletteComponent.prototype, "onWindowMouseup", null);
    ColorsPaletteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors-palette',
            template: __webpack_require__(/*! ./colors-palette.component.html */ "./src/app/colors-palette/colors-palette.component.html"),
            styles: [__webpack_require__(/*! ./colors-palette.component.scss */ "./src/app/colors-palette/colors-palette.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsPaletteComponent);
    return ColorsPaletteComponent;
}());



/***/ }),

/***/ "./src/app/colors/colors.component.html":
/*!**********************************************!*\
  !*** ./src/app/colors/colors.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"colors\">\n  <div class=\"pencil\"\n       [style.background-color]=\"pencilColor\"></div>\n  <ul fxLayout=\"row\" \n      (mousedown)=\"onMousedown($event)\"\n      (mousemove)=\"onMousemove($event)\">\n    <li *ngFor=\"let color of colors; let i = index;\"\n        fxFlex\n        [attr.data-color]=\"color\"\n        class=\"colors__item\"\n        [style.background-color]=\"color\"\n        [class.active]=\"color === currentColor\"></li>\n  </ul>\n  <app-colors-palette [color]=\"currentColor\" \n                      (changeColor)=\"setPencilColor($event)\"></app-colors-palette>\n</div>\n"

/***/ }),

/***/ "./src/app/colors/colors.component.scss":
/*!**********************************************!*\
  !*** ./src/app/colors/colors.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  height: 40px; }\n\napp-colors-palette {\n  margin-top: 10px;\n  display: block; }\n\n.colors {\n  position: relative; }\n\n.pencil {\n  position: absolute;\n  top: -61px;\n  left: 50%;\n  margin-left: -20px;\n  width: 40px;\n  height: 50px;\n  box-shadow: 0px -7px 8px 0px grey;\n  border: 4px solid white;\n  border-radius: 5px; }\n\n.colors__item.active {\n  position: relative; }\n\n.colors__item.active:after {\n    display: block;\n    content: ' ';\n    width: 10px;\n    height: 10px;\n    border: 10px solid #fff;\n    box-shadow: 0 0 10px grey, inset 0 0 10px grey;\n    position: absolute;\n    top: 5px;\n    left: -10px;\n    border-radius: 20px;\n    pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvY29sb3ItYXBwL3NyYy9hcHAvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVM7RUFDVCxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGFBQVksRUFDZjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0NBQWlDO0VBQ2pDLHdCQUF1QjtFQUN2QixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFFUSxtQkFBa0IsRUFjckI7O0FBaEJMO0lBSVksZUFBYztJQUNkLGFBQVk7SUFDWixZQUFXO0lBQ1gsYUFBWTtJQUNaLHdCQUF1QjtJQUN2QiwrQ0FBOEM7SUFDOUMsbUJBQWtCO0lBQ2xCLFNBQVE7SUFDUixZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLHFCQUFvQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5hcHAtY29sb3JzLXBhbGV0dGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uY29sb3JzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGVuY2lsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNjFweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggLTdweCA4cHggMHB4IGdyZXk7XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbG9yc19faXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggZ3JleSwgaW5zZXQgMCAwIDEwcHggZ3JleTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/colors/colors.component.ts":
/*!********************************************!*\
  !*** ./src/app/colors/colors.component.ts ***!
  \********************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_2__);



var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.colors = [];
        this.isMousedown = false;
        this.changeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    ColorsComponent.prototype.onWindowMouseup = function () {
        this.isMousedown = false;
    };
    ColorsComponent.prototype.ngOnInit = function () {
        this.colors = chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#f44242', '#f1f442']).colors(20).concat(chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#f1f442', '#47f441']).colors(20).slice(1), chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#47f441', '#41f4e2']).colors(20).slice(1), chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#41f4e2', '#4341f4']).colors(20).slice(1), chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#4341f4', '#e23ff4']).colors(20).slice(1), chroma_js__WEBPACK_IMPORTED_MODULE_2__["scale"](['#e23ff4', '#f43f3f']).colors(20).slice(1));
        this.currentColor = this.colors[0];
        this.setPencilColor(this.currentColor);
    };
    ColorsComponent.prototype.onMousedown = function (e) {
        this.isMousedown = true;
        this.updateCurrentColor(e.target);
    };
    ColorsComponent.prototype.onMousemove = function (e) {
        if (!this.isMousedown) {
            return;
        }
        this.updateCurrentColor(e.target);
    };
    ColorsComponent.prototype.updateCurrentColor = function (element) {
        while (element) {
            if (element.dataset.color) {
                this.currentColor = element.dataset.color;
                break;
            }
            element = element.parentElement;
        }
    };
    ColorsComponent.prototype.setPencilColor = function (color) {
        this.pencilColor = color;
        this.changeColor.emit(this.pencilColor);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorsComponent.prototype, "changeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:mouseup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ColorsComponent.prototype, "onWindowMouseup", null);
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/colors/colors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/list-item/list-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-item/list-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"controls\" \n       fxLayout=\"row\" \n       fxLayoutAlign=\"space-around center\">\n    <button mat-stroked-button \n            [style.background]=\"pencilColor\"\n            (click)=\"openBottomSheet()\">&nbsp;</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n  </div>\n  <div class=\"coloring\" #coloring *ngIf=\"item\">\n    <app-svg *ngIf=\"svg\" [svg]=\"svg\" [maxHeight]=\"maxHeight\" [maxWidth]=\"maxWidth\" [color]=\"pencilColor\"></app-svg>\n    <!-- <app-colors (changeColor)=\"onChangePencilColor($event)\"></app-colors> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/list-item/list-item.component.scss":
/*!****************************************************!*\
  !*** ./src/app/list-item/list-item.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls {\n  position: fixed;\n  top: 40px;\n  right: 0;\n  left: 0;\n  height: 50px;\n  z-index: 2;\n  background: white;\n  border-bottom: 1px solid #dcdcdc; }\n\n.coloring {\n  top: 90px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: fixed;\n  z-index: 1;\n  background: #e9e9e9;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvY29sb3ItYXBwL3NyYy9hcHAvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixRQUFPO0VBQ1AsYUFBWTtFQUNaLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsaUNBQWdDLEVBQ25DOztBQUVEO0VBQ0ksVUFBUztFQUNULFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULGdCQUFlO0VBQ2YsV0FBVTtFQUNWLG9CQUFtQjtFQUNuQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA0MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XG59XG5cbi5jb2xvcmluZyB7XG4gICAgdG9wOiA5MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list-item/list-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-item/list-item.component.ts ***!
  \**************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coloring_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coloring.service */ "./src/app/coloring.service.ts");
/* harmony import */ var _svg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg.service */ "./src/app/svg.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _colors_bottom_sheet_colors_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../colors-bottom-sheet/colors-bottom-sheet.component */ "./src/app/colors-bottom-sheet/colors-bottom-sheet.component.ts");







var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(coloringService, svgService, route, bottomSheet, el) {
        this.coloringService = coloringService;
        this.svgService = svgService;
        this.route = route;
        this.bottomSheet = bottomSheet;
        this.el = el;
        this.pencilColor = '#f44242';
    }
    ListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.alias = 'coloring-1'; // params['alias'];
            _this.coloringService.getList()
                .subscribe(function (list) {
                _this.item = list.find(function (item) { return item.alias === _this.alias; });
                var svgPath = "assets/images/coloring/" + _this.item.id + ".svg";
                _this.svgService.load2(svgPath)
                    .subscribe(function (svg) {
                    _this.svg = svg;
                    var data = _this.coloring.nativeElement.getBoundingClientRect();
                    _this.maxWidth = data.width;
                    _this.maxHeight = data.height;
                });
            });
        });
    };
    ListItemComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ListItemComponent.prototype.onChangePencilColor = function (color) {
        this.pencilColor = color;
    };
    ListItemComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(_colors_bottom_sheet_colors_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_6__["ColorsBottomSheetComponent"], {
            data: {
                changeColor: function (color) { return _this.onChangePencilColor(color); }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('coloring'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ListItemComponent.prototype, "coloring", void 0);
    ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! ./list-item.component.html */ "./src/app/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.scss */ "./src/app/list-item/list-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_coloring_service__WEBPACK_IMPORTED_MODULE_3__["ColoringService"],
            _svg_service__WEBPACK_IMPORTED_MODULE_4__["SvgService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheet"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-wrapper\">\n  <ul>\n    <li *ngFor=\"let item of list\">\n      <a [routerLink]=\"['coloring', item.alias]\">{{item.title}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coloring_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coloring.service */ "./src/app/coloring.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(coloringService) {
        this.coloringService = coloringService;
        this.list = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coloringService.getList()
            .subscribe(function (list) { return _this.list = list; });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_coloring_service__WEBPACK_IMPORTED_MODULE_2__["ColoringService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/svg.service.ts":
/*!********************************!*\
  !*** ./src/app/svg.service.ts ***!
  \********************************/
/*! exports provided: SvgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgService", function() { return SvgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SvgService = /** @class */ (function () {
    function SvgService(http) {
        this.http = http;
    }
    SvgService.prototype.load2 = function (svgPath) {
        var responseType = 'text';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Accept', 'image/svg+xml');
        return this.http.get(svgPath, { headers: headers, responseType: responseType });
    };
    SvgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SvgService);
    return SvgService;
}());



/***/ }),

/***/ "./src/app/svg/svg.component.html":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div style=\"position: fixed; top: 100px; left: 0; right: 0; z-index: 3; background: white;\">\n    {{width}} | {{height}} \n    <br>\n    {{deltaX}} | {{deltaY}} \n  </div> -->\n  <div id=\"coloring\"\n       class=\"coloring-wrapper\" \n       #myTemplate>\n  </div>"

/***/ }),

/***/ "./src/app/svg/svg.component.scss":
/*!****************************************!*\
  !*** ./src/app/svg/svg.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  touch-action: auto;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ldG9rb3ZlbmtvL0Rlc2t0b3AvcHJvamVjdHMvY29sb3ItYXBwL3NyYy9hcHAvc3ZnL3N2Zy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdmcvc3ZnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcbiAgICB0b3VjaC1hY3Rpb246IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/svg/svg.component.ts":
/*!**************************************!*\
  !*** ./src/app/svg/svg.component.ts ***!
  \**************************************/
/*! exports provided: SvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgComponent", function() { return SvgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined;




var throttle = function (func, limit) {
    var inThrottle;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!inThrottle) {
            func.apply(_this, args);
            inThrottle = true;
            setTimeout(function () { return inThrottle = false; }, limit);
        }
    };
};
var SvgComponent = /** @class */ (function () {
    function SvgComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.buttons = [];
        this.groups = [];
        this.group = null;
        this.e = { test: 1 };
        this.deltaX = 0;
        this.deltaY = 0;
    }
    SvgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myTemplate.nativeElement.innerHTML = this.svg;
        this.groups = Array.from(this.myTemplate.nativeElement.querySelectorAll('svg>g'));
        this.color = 'red';
        this.group = null;
        var width = this.width = this.maxWidth;
        var height = this.height = this.maxHeight;
        var deltaX = 0;
        var deltaY = 0;
        this.width = this.maxWidth;
        this.height = this.maxHeight;
        // this.width = 1517;
        // this.height = 2266;
        // this.deltaX = -816;
        // this.deltaY = -430;
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]('#coloring svg');
        var svg1 = this.myTemplate.nativeElement.querySelector('svg');
        var element = svg1;
        var hammertime = new hammerjs__WEBPACK_IMPORTED_MODULE_3__(element, {});
        hammertime.get('pinch').set({ enable: true });
        hammertime.get('pan').set({ threshold: 0 });
        var pinchStart = { x: null, y: null };
        var lastEvent = null;
        var originalSize = {
            width: 200,
            height: 300
        };
        var current = {
            x: 0,
            y: 0,
            z: 1,
            zooming: false,
            width: originalSize.width * 1,
            height: originalSize.height * 1,
        };
        var last = {
            x: current.x,
            y: current.y,
            z: current.z
        };
        function getRelativePosition(el, point, oSize, scale) {
            var domCoords = getCoords(el);
            var elementX = point.x - domCoords.x;
            var elementY = point.y - domCoords.y;
            var relativeX = elementX / (oSize.width * scale / 2) - 1;
            var relativeY = elementY / (oSize.height * scale / 2) - 1;
            return { x: relativeX, y: relativeY };
        }
        function getCoords(elem) {
            var box = elem.getBoundingClientRect();
            var body = document.body;
            var docEl = document.documentElement;
            var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
            var clientTop = docEl.clientTop || body.clientTop || 0;
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;
            var top = box.top + scrollTop - clientTop;
            var left = box.left + scrollLeft - clientLeft;
            return { x: Math.round(left), y: Math.round(top) };
        }
        function scaleFrom(zoomOrigin, cScale, newScale) {
            var currentShift = getCoordinateShiftDueToScale(originalSize, cScale);
            var newShift = getCoordinateShiftDueToScale(originalSize, newScale);
            var zoomDistance = newScale - cScale;
            var shift = {
                x: currentShift.x - newShift.x,
                y: currentShift.y - newShift.y,
            };
            var output = {
                x: zoomOrigin.x * shift.x,
                y: zoomOrigin.y * shift.y,
                z: zoomDistance
            };
            return output;
        }
        function getCoordinateShiftDueToScale(size, scale) {
            var newWidth = scale * size.width;
            var newHeight = scale * size.height;
            var dx = (newWidth - size.width) / 2;
            var dy = (newHeight - size.height) / 2;
            return {
                x: dx,
                y: dy
            };
        }
        hammertime.on('doubletap', function (e) {
            var scaleFactor = 1;
            if (current.zooming === false) {
                current.zooming = true;
            }
            else {
                current.zooming = false;
                scaleFactor = -scaleFactor;
            }
            element.style.transition = '0.3s';
            setTimeout(function () {
                element.style.transition = 'none';
            }, 300);
            var zoomOrigin = getRelativePosition(element, { x: e.center.x, y: e.center.y }, originalSize, current.z);
            var d = scaleFrom(zoomOrigin, current.z, current.z + scaleFactor);
            current.x += d.x;
            current.y += d.y;
            current.z += d.z;
            last.x = current.x;
            last.y = current.y;
            last.z = current.z;
            update();
        });
        hammertime.on('pinch', function (e) {
            var d = scaleFrom(pinchZoomOrigin, last.z, last.z * e.scale);
            current.x = d.x + last.x + e.deltaX;
            current.y = d.y + last.y + e.deltaY;
            current.z = d.z + last.z;
            lastEvent = 'pinch';
            update();
        });
        var pinchZoomOrigin = null;
        hammertime.on('pinchstart', function (e) {
            pinchStart.x = e.center.x;
            pinchStart.y = e.center.y;
            pinchZoomOrigin = getRelativePosition(element, { x: pinchStart.x, y: pinchStart.y }, originalSize, current.z);
            lastEvent = 'pinchstart';
        });
        hammertime.on('pinchend', function (e) {
            last.x = current.x;
            last.y = current.y;
            last.z = current.z;
            lastEvent = 'pinchend';
        });
        function update() {
            current.height = originalSize.height * current.z;
            current.width = originalSize.width * current.z;
            element.style.transform = 'translate3d(' + current.x + 'px, ' + current.y + 'px, 0) scale(' + current.z + ')';
        }
        //     svg1.style.transform = `translate3d(${this.deltaX}px, ${this.deltaY}px, 0)`;
        //     // svg1.style.height = `${this.maxHeight}px`;
        //     // svg1.style.width = `${this.maxWidth}px`;
        //     this.zone.runOutsideAngular(() => {
        //       const hammer = new Hammer(this.el.nativeElement);
        //       let requestID;
        //       const requestAnimationFrame = window.requestAnimationFrame || (<any>window).mozRequestAnimationFrame ||
        //                             window.webkitRequestAnimationFrame || (<any>window).msRequestAnimationFrame;
        //       const cancelAnimationFrame = window.cancelAnimationFrame || (<any>window).mozCancelAnimationFrame;
        //       function step(timestamp) {
        //         this.zone.runOutsideAngular(() => {
        //           console.log('requestAnimationFrame');
        //           svg1.style.height = `${height}px`;
        //           svg1.style.width = `${width}px`;
        //           svg1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        //           requestID = requestAnimationFrame(step.bind(this));
        //         });
        //       }
        //       hammer.on('pinchstart', () => {
        //         this.zone.runOutsideAngular(() => {
        //         requestID = requestAnimationFrame(step.bind(this));
        //         });
        //       });
        //       hammer.on('pinchmove', throttle((e) => {
        //         this.zone.runOutsideAngular(() => {
        //         console.log('pinch');
        //         this.e = e;
        //         const offset = Math.floor((e.scale - 1) * 200);
        //         console.log('touchmove:offset ', offset);
        //         height = this.height + offset;
        //         const viewBox = svg.attr('viewBox').split(' ');
        //         const [w, h] = viewBox.slice(2);
        //         const ratio = +h / +w;
        //         width = Math.floor(height / ratio);
        //         deltaX = this.deltaX + e.deltaX;
        //         deltaY = this.deltaY + e.deltaY;
        //         });
        //         // svg
        //         //   .attr('width', width)
        //         //   .attr('height', height)
        //         //   .attr('transform', `translate(${deltaX}, ${deltaY})`);
        //       }, 100));
        //       // let wheelTimerId;
        //       // svg1.addEventListener('wheel', (e) => {
        //       //   if (!requestID) {
        //       //     this.zone.runOutsideAngular(() => {
        //       //       requestID = requestAnimationFrame(step.bind(this));
        //       //       });
        //       //   }
        //       //   const offset = e.deltaY;
        //       //   console.log('touchmove:offset ', offset);
        //       //   height = height - offset;
        //       //   const viewBox = svg.attr('viewBox').split(' ');
        //       //   const [w, h] = viewBox.slice(2);
        //       //   const ratio = +h / +w;
        //       //   width = Math.floor(height / ratio);
        //       //   deltaX = this.deltaX + e.deltaX;
        //       //   deltaY = this.deltaY + e.deltaY;
        //       //   clearTimeout(wheelTimerId);
        //       //   wheelTimerId = setTimeout(() => {
        //       //     this.width = width;
        //       //     this.height = height;
        //       //     this.deltaX = deltaX;
        //       //     this.deltaY = deltaY;
        //       //     cancelAnimationFrame(requestID);
        //       //     requestID = null;
        //       //   }, 1000);
        //       // });
        //       hammer.on('pinchend', () => {
        //           this.width = width;
        //           this.height = height;
        //           this.deltaX = deltaX;
        //           this.deltaY = deltaY;
        //           cancelAnimationFrame(requestID);
        //           requestID = null;
        //       });
        //       hammer.get('pinch').set({ enable: true });
        var defs = svg1.querySelector('svg>defs');
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            svg1.append(defs);
        }
        this.groups.forEach(function (g, index) {
            var clipPath = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
            clipPath.id = "clipPath" + index;
            var paths = Array.from(g.querySelectorAll('path'));
            paths.forEach(function (p) { return clipPath.append(p.cloneNode(true)); });
            defs.append(clipPath);
            g.style.clipPath = "url(" + window.location.href + "#" + clipPath.id + ")";
        });
        var line = d3__WEBPACK_IMPORTED_MODULE_2__["line"]();
        svg
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('preserveAspectRatio', 'xMidYMid meet');
        var drawObj = {
            isDown: false,
            dataPoints: [],
            currentPath: null,
            color: 0
        };
        // svg.on('click', () => {
        //   const viewBox = svg.attr('viewBox').split(' ');
        //   const [w, h] = viewBox.slice(2);
        //   console.log('click: ', d3.event.x, d3.event.y, svg);
        //   console.log('width: ', w, this.width, d3.event.x * (+w / this.width) - 20);
        //   console.log('height: ', h, this.height, d3.event.y * (+h / this.height) - 40);
        //   const ratio = +h / this.height;
        //   svg.append('circle')
        //     .style('stroke', 'gray')
        //     .style('fill', 'white')
        //     .attr('r', 40)
        //     .attr('cx', (d3.event.x - this.deltaX - (this.width - +w / ratio) / 2) * ratio)
        //     .attr('cy', (d3.event.y - this.deltaY - 90 - (this.height - +h / ratio) / 2) * ratio);
        // });
        hammertime.on('panstart', function (e) {
            console.log('panstart...');
            drawObj.isDown = true;
            _this.group = null;
            var el = e.target;
            // debugger;
            while (el) {
                if (el.tagName === 'g') {
                    _this.group = d3__WEBPACK_IMPORTED_MODULE_2__["select"](el);
                }
                el = el.parentElement;
            }
            if (_this.group) {
                var viewBox = svg.attr('viewBox').split(' ');
                var _a = viewBox.slice(2), w = _a[0], h = _a[1];
                var ratio = +h / _this.height;
                var x = (e.center.x - _this.deltaX - (_this.width - +w / ratio) / 2) * ratio;
                var y = (e.center.y - _this.deltaY - 90 - (_this.height - +h / ratio) / 2) * ratio;
                drawObj.dataPoints.push([x, y], [x + 50, y + 50]);
                if (!drawObj.currentPath) {
                    drawObj.currentPath = _this.group.append('path')
                        .attr('class', 'currentPath')
                        .style('stroke-width', 50)
                        .style('stroke', _this.color)
                        .style('fill', 'none');
                }
                drawObj.currentPath
                    .datum(drawObj.dataPoints)
                    .attr('d', line);
            }
        });
        hammertime.on('pan', function (e) {
            console.log('pan...');
            if (drawObj.isDown && _this.group) {
                var viewBox = svg.attr('viewBox').split(' ');
                var _a = viewBox.slice(2), w = _a[0], h = _a[1];
                var ratio = +h / _this.height;
                var x = (e.center.x - _this.deltaX - (_this.width - +w / ratio) / 2) * ratio;
                var y = (e.center.y - _this.deltaY - 90 - (_this.height - +h / ratio) / 2) * ratio;
                drawObj.dataPoints.push([x, y]);
                if (!drawObj.currentPath) {
                    drawObj.currentPath = _this.group.append('path')
                        .attr('class', 'currentPath')
                        .style('stroke-width', 100)
                        .style('stroke', _this.color)
                        .style('fill', 'none');
                }
                drawObj.currentPath
                    .datum(drawObj.dataPoints)
                    .attr('d', line);
            }
        });
        hammertime.on('panend', function (e) {
            console.log('panend...');
            drawObj.isDown = false;
            drawObj.currentPath.attr('class', 'oldPath');
            drawObj.dataPoints = [];
            drawObj.currentPath = null;
            if (++drawObj.color > 19) {
                drawObj.color = 0;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgComponent.prototype, "svg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgComponent.prototype, "maxWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgComponent.prototype, "maxHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SvgComponent.prototype, "myTemplate", void 0);
    SvgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-svg',
            template: __webpack_require__(/*! ./svg.component.html */ "./src/app/svg/svg.component.html"),
            styles: [__webpack_require__(/*! ./svg.component.scss */ "./src/app/svg/svg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SvgComponent);
    return SvgComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/etokovenko/Desktop/projects/color-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map