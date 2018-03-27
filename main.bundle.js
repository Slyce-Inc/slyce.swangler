webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_endpoints_view_endpoints_view_component__ = __webpack_require__("./src/app/views/endpoints-view/endpoints-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__views_endpoints_view_endpoints_view_component__["a" /* EndpointsViewComponent */] },
    { path: ':endpointTag', component: __WEBPACK_IMPORTED_MODULE_2__views_endpoints_view_endpoints_view_component__["a" /* EndpointsViewComponent */], },
    { path: ':endpointTag/:endpointId', component: __WEBPACK_IMPORTED_MODULE_2__views_endpoints_view_endpoints_view_component__["a" /* EndpointsViewComponent */], },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__views_endpoints_view_endpoints_view_component__["a" /* EndpointsViewComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav id=\"main-nav\" class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand d-flex align-items-center\" href=\"\">\n        <embed class=\"studio-icon mr-2\" type=\"image/svg+xml\" src=\"./assets/images/studio-icon.svg\">\n        Forge\n        <span class=\"align-self-top ml-2 text-uppercase\">API Docs</span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#sticky_nav_wrapper\">\n        <svg class=\"svg-inline--fa fa-bars fa-w-14\" aria-hidden=\"true\" data-fa-processed=\"\" data-prefix=\"fal\" data-icon=\"bars\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z\"></path></svg><!-- <i class=\"fal fa-bars\"></i> -->\n    </button>\n    <ul class=\"navbar-nav ml-auto d-none d-lg-block\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"mailto:andres@slyce.it\">Help</a>\n        </li>\n    </ul>\n</nav>\n\n<router-outlet></router-outlet>\n<simple-notifications [options]=\"options\"></simple-notifications>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".studio-icon {\n  width: 30px;\n  height: 30px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_MOCK_DATA__ = __webpack_require__("./src/app/models/MOCK_DATA.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(swaggerService) {
        this.swaggerService = swaggerService;
        this.sortedApiData = this.swaggerService.getEndpointsSortedByTags();
        this.appEndPoint = __WEBPACK_IMPORTED_MODULE_2__models_MOCK_DATA__["a" /* APPENDPOINT */];
        this.options = {
            timeOut: 5000,
            showProgressBar: false,
            pauseOnHover: false,
            clickToClose: false,
            position: ['bottom', 'right']
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.swaggerService.getApiData().subscribe(function (data) {
            _this.apiData = data;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_component_auth_component_controller__ = __webpack_require__("./src/app/components/auth-component/auth-component.controller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_collapse__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_sample_sample_controller__ = __webpack_require__("./src/app/views/sample/sample.controller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_collapsable_nav_collapsable_nav_component__ = __webpack_require__("./src/app/components/collapsable-nav/collapsable-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_param_console_param_console_component__ = __webpack_require__("./src/app/components/param-console/param-console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sidebar_nav_sidebar_nav_component__ = __webpack_require__("./src/app/components/sidebar-nav/sidebar-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_main_main_component__ = __webpack_require__("./src/app/views/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_example_collapsible_example_collapsible_component__ = __webpack_require__("./src/app/components/example-collapsible/example-collapsible.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_endpoint_endpoint_component__ = __webpack_require__("./src/app/components/endpoint/endpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_example_side_bar_example_side_bar_component__ = __webpack_require__("./src/app/components/example-side-bar/example-side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_endpoints_view_endpoints_view_component__ = __webpack_require__("./src/app/views/endpoints-view/endpoints-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_endpoints_shared_service__ = __webpack_require__("./src/app/services/endpoints-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_image_bytes_service__ = __webpack_require__("./src/app/services/image-bytes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_socket_endpoint_socket_endpoint_component__ = __webpack_require__("./src/app/components/socket-endpoint/socket-endpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_get_index_pipe__ = __webpack_require__("./src/app/pipes/get-index.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_alt_input_altInput_module__ = __webpack_require__("./src/app/components/alt-input/altInput.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__directives_json_format_directive__ = __webpack_require__("./src/app/directives/json-format.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_config_service_config_service__ = __webpack_require__("./src/app/services/config-service/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_vars_service__ = __webpack_require__("./src/app/services/shared-vars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_auth_component_auth_component_controller__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_sample_sample_controller__["a" /* SampleViewComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_collapsable_nav_collapsable_nav_component__["a" /* CollapsableNavComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_sidebar_nav_sidebar_nav_component__["a" /* SidebarNavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_example_collapsible_example_collapsible_component__["a" /* ExampleCollapsibleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_param_console_param_console_component__["a" /* ParamConsoleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_sidebar_nav_sidebar_nav_component__["a" /* SidebarNavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_collapsable_nav_collapsable_nav_component__["a" /* CollapsableNavComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_example_side_bar_example_side_bar_component__["a" /* ExampleSideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_main_main_component__["a" /* MainViewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_endpoint_endpoint_component__["a" /* EndpointComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_endpoints_view_endpoints_view_component__["a" /* EndpointsViewComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_socket_endpoint_socket_endpoint_component__["a" /* SocketEndpointComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pipes_get_index_pipe__["a" /* GetIndexPipe */],
                __WEBPACK_IMPORTED_MODULE_30__directives_json_format_directive__["a" /* JsonFormatDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_29__components_alt_input_altInput_module__["a" /* AltInputModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["b" /* TabsModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__services_shared_vars_service__["a" /* SharedVarsService */],
                __WEBPACK_IMPORTED_MODULE_31__services_config_service_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_4__services_swagger_service__["a" /* SwaggerService */],
                __WEBPACK_IMPORTED_MODULE_6__services_local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_21__services_endpoints_shared_service__["a" /* EndpointsSharedService */],
                __WEBPACK_IMPORTED_MODULE_24__services_image_bytes_service__["a" /* ImageBytesService */],
                __WEBPACK_IMPORTED_MODULE_26__services_socket_socket_service__["a" /* SocketService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-warning\" role=\"alert\">\n  <strong>Substitute -> {{this.header}}:</strong>\n<div>\n</div>\n\n  <div>\n    <div class=\"row no-gutters\">\n      <div class=\"col-10\">\n        <input id=\"input\" type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"this.getBytes($event)\" #fileInput>\n      </div>\n      <div class=\"col-1\">\n        <span (click) = \"this.clearInput()\" *ngIf=\"this.hasContent\" class=\"badge badge-danger\">X</span>\n      </div>\n      <div class='col-1'>\n        <span *ngIf=\"this.hasContent\" (click) = \"this.applyButtonClicked()\" class=\"badge badge-success\">Apply</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--\n<input *ngIf=\"parm.schema.properties.image_bytes\" class=\"image-input\" type=\"file\" accept=\"image/x-png,image/jpeg\" (change)=\"this.getBytes($event)\">\n-->\n"

/***/ }),

/***/ "./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.scss":
/***/ (function(module, exports) {

module.exports = "input[type=file] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%; }\n\n.badge {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltFileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alt_input_component__ = __webpack_require__("./src/app/components/alt-input/alt-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_image_bytes_service__ = __webpack_require__("./src/app/services/image-bytes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__ = __webpack_require__("./src/app/components/alt-input/model/AltInputEvent.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AltFileUploadComponent = /** @class */ (function (_super) {
    __extends(AltFileUploadComponent, _super);
    function AltFileUploadComponent(imageBytesService) {
        var _this = _super.call(this) || this;
        _this.imageBytesService = imageBytesService;
        _this.hasContent = false;
        return _this;
    }
    AltFileUploadComponent.prototype.ngOnInit = function () {
    };
    AltFileUploadComponent.prototype.getBytes = function ($event) {
        var _this = this;
        this.hasContent = true;
        this.imageBytesService.getImageBytes($event.target)
            .subscribe(function (bytes) {
            _this.event.emit(new __WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */](__WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DATA, bytes.toString()));
        });
    };
    AltFileUploadComponent.prototype.clearInput = function () {
        this.fileInput.nativeElement.value = '';
        this.hasContent = false;
        this.event.emit(new __WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */](__WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DELETE));
    };
    AltFileUploadComponent.prototype.applyButtonClicked = function () {
        this.event.emit(new __WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */](__WEBPACK_IMPORTED_MODULE_3__model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.APPLY));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AltFileUploadComponent.prototype, "fileInput", void 0);
    AltFileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alt-file-upload',
            template: __webpack_require__("./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.html"),
            styles: [__webpack_require__("./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_image_bytes_service__["a" /* ImageBytesService */]])
    ], AltFileUploadComponent);
    return AltFileUploadComponent;
}(__WEBPACK_IMPORTED_MODULE_1__alt_input_component__["a" /* AltInputComponent */]));



/***/ }),

/***/ "./src/app/components/alt-input/alt-input.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nMake sure to apply the class of alt for each alt input you make\n-->\n\n<!--\nFor Type: String && Format: Byte, ex Accept: image/x-png,image/jpeg\n-->\n<app-alt-file-upload class=\"alt\" [header]=\"this.header\" [type]=\"this.type\" [format]=\"this.format\" (event)=\"this.event.emit($event)\" *ngIf=\"this.type == 'string' && this.format == 'byte'\"></app-alt-file-upload>\n"

/***/ }),

/***/ "./src/app/components/alt-input/alt-input.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/alt-input/alt-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AltInputComponent = /** @class */ (function () {
    function AltInputComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AltInputComponent.prototype.ngOnInit = function () {
    };
    AltInputComponent.TYPES = {
        STRING: 'string'
    };
    AltInputComponent.FORMATS = {
        BYTE: 'byte'
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], AltInputComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('format'),
        __metadata("design:type", String)
    ], AltInputComponent.prototype, "format", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('accept'),
        __metadata("design:type", String)
    ], AltInputComponent.prototype, "accept", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('header'),
        __metadata("design:type", String)
    ], AltInputComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('event'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AltInputComponent.prototype, "event", void 0);
    AltInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alt-input',
            template: __webpack_require__("./src/app/components/alt-input/alt-input.component.html"),
            styles: [__webpack_require__("./src/app/components/alt-input/alt-input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AltInputComponent);
    return AltInputComponent;
}());



/***/ }),

/***/ "./src/app/components/alt-input/altInput.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alt_input_component__ = __webpack_require__("./src/app/components/alt-input/alt-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alt_file_upload_alt_file_upload_component__ = __webpack_require__("./src/app/components/alt-input/alt-file-upload/alt-file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AltInputModule = /** @class */ (function () {
    function AltInputModule() {
    }
    AltInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__alt_input_component__["a" /* AltInputComponent */],
                __WEBPACK_IMPORTED_MODULE_2__alt_file_upload_alt_file_upload_component__["a" /* AltFileUploadComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__alt_input_component__["a" /* AltInputComponent */]
            ]
        })
    ], AltInputModule);
    return AltInputModule;
}());



/***/ }),

/***/ "./src/app/components/alt-input/model/AltInputEvent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltInputEventModel; });
var AltInputEventModel = /** @class */ (function () {
    function AltInputEventModel(eventType, data) {
        this.eventType = eventType;
        this.data = data;
    }
    AltInputEventModel.EVENT_TYPES = {
        'DATA': 'DATA',
        'DELETE': 'DELETE',
        'APPLY': 'APPLY'
    };
    return AltInputEventModel;
}());



/***/ }),

/***/ "./src/app/components/auth-component/auth-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"auth_options\">\n\n  <div id=\"apikeys\" class=\"auth_container form-group pt-3\">\n\n    <label class=\"auth_label text-uppercase\">Authentication Header:</label>\n\n    <div class=\"security-definitions\" *ngIf=\"this.securityDefinitions != null\">\n      <input *ngFor=\"let sdName of Object.keys(this.securityDefinitions);\" [(ngModel)]=\"inputFields[sdName]\" type=\"text\" class=\"form-control form-control-sm security-definition-input\" aria-describedby=\"auth\" placeholder=\"{{sdName}}\">\n      <div class=\"input-group-append\">\n        <button (click)=\"this.clickApplyButton()\" id=\"applyButton1257235\" type=\"button\" class=\"btn btn-sm btn-secondary apply-security-definitions\">Apply</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth-component/auth-component.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-control {\n  margin-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/components/auth-component/auth-component.controller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_auth_security_definition__ = __webpack_require__("./src/app/models/auth/security-definition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(localStorageService, notify) {
        this.localStorageService = localStorageService;
        this.notify = notify;
        this.Object = null;
        this.APPLIED_AUTH_MSG = 'Authentication Applied';
        this.inputFields = {};
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Object = Object;
        this.localStorageService.securityDefinitions.subscribe(function (res) {
            _this.securityDefinitions = res;
            for (var sd in _this.securityDefinitions) {
                if (_this.securityDefinitions.hasOwnProperty(sd)) {
                    var sdObj = _this.securityDefinitions[sd];
                    var localStorageVal = _this.localStorageService.getStorageVar(sdObj.name);
                    if (localStorageVal) {
                        _this.inputFields[sd] = localStorageVal;
                    }
                }
            }
        });
    };
    AuthComponent.prototype.clickApplyButton = function () {
        for (var i in this.inputFields) {
            if (this.inputFields.hasOwnProperty(i)) {
                this.localStorageService.setStorageVar(i, this.inputFields[i]);
            }
        }
        this.notify.success('Success', this.APPLIED_AUTH_MSG);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('securityDefinitions'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_auth_security_definition__["a" /* SecurityDefinition */])
    ], AuthComponent.prototype, "securityDefinitions", void 0);
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-component',
            template: __webpack_require__("./src/app/components/auth-component/auth-component.component.html"),
            styles: [__webpack_require__("./src/app/components/auth-component/auth-component.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/components/collapsable-nav/collapsable-nav.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"nav flex-column parent_menu\" [ngClass]=\"{'expanded' : !isCollapsed}\">\n  <nav class=\"collapsable-nav-header\" routerLinkActive=\"active\" (click)=\"this.toggleExpand($event)\">\n      <div class=\"nav-link\">\n        <a class=\"text-capitalize navigate-to-tag\" [routerLink]=\"'/' + tag\" >{{ tag }}</a>\n      </div>\n      <div class=\"toggle-collapse\">\n        <i class=\"fas fa-angle-down\"></i>\n      </div>\n  </nav>\n  <nav class=\"collapsable-nav-body nav flex-column sub_menu\"\n    *ngIf=\"!isCollapsed\"\n    class=\"card card-block card-header\">\n    <div *ngFor=\"let endpoint of endpoints; let i = index\">\n      <a [id]=\"'navLink' + i\" class=\"nav-link no-tag-link\" [routerLink]=\"'/' + tag\"  [queryParams]=\"{enpt: endpoint.operationId}\">{{this.getNavLinkName(endpoint)}}</a>\n    </div>\n  </nav>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/collapsable-nav/collapsable-nav.component.scss":
/***/ (function(module, exports) {

module.exports = "nav {\n  width: 100%;\n  color: #212529; }\n\n.parent_menu {\n  width: 100%; }\n\n.collapsable-nav-header {\n  position: relative;\n  cursor: pointer; }\n\n.collapsable-nav-header.active {\n    font-weight: bold; }\n\n.nav-link {\n  padding: .5rem 1rem; }\n\n.nav-link a:hover {\n    text-decoration: none; }\n\n.toggle-collapse {\n  width: 20px;\n  text-align: center;\n  position: absolute;\n  top: 8px;\n  right: 20px; }\n\n.toggle-collapse i {\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n\n.expanded .toggle-collapse i {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.collapsable-nav-body a {\n  display: block;\n  widows: 100%;\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  padding-left: 30px; }\n\na {\n  color: #212529; }\n\na.active {\n    font-weight: bold; }\n\na:hover {\n    color: #55606f; }\n\n.card-header {\n  border-radius: 0;\n  border-right: none;\n  border-left: none; }\n"

/***/ }),

/***/ "./src/app/components/collapsable-nav/collapsable-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsableNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollapsableNavComponent = /** @class */ (function () {
    function CollapsableNavComponent() {
        this.sectionToExpand = null;
        this.Object = null;
        this.isCollapsed = true;
    }
    CollapsableNavComponent.prototype.ngOnInit = function () {
        this.Object = Object;
    };
    CollapsableNavComponent.prototype.toggleExpand = function (event) {
        if (!event.target.classList.value.includes('navigate-to-tag')) {
            this.isCollapsed = !this.isCollapsed;
        }
    };
    CollapsableNavComponent.prototype.ngAfterContentInit = function () {
        if (this.tag === this.sectionToExpand) {
            this.isCollapsed = false;
        }
        else {
            this.isCollapsed = true;
        }
    };
    CollapsableNavComponent.prototype.ngOnChanges = function (changes) {
        if (changes.sectionToExpand) {
            this.isCollapsed = true;
            if (this.tag === changes.sectionToExpand.currentValue) {
                this.isCollapsed = false;
            }
        }
    };
    CollapsableNavComponent.prototype.getNavLinkName = function (endpointObj) {
        if (endpointObj.summary) {
            return (endpointObj.summary);
        }
        else if (endpointObj.operationId) {
            return (endpointObj.operationId);
        }
        else if (endpointObj.url) {
            return (endpointObj.url);
        }
        else {
            return ('No Name');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapsableNavComponent.prototype, "tag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CollapsableNavComponent.prototype, "sectionToExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CollapsableNavComponent.prototype, "endpoints", void 0);
    CollapsableNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapsable-nav',
            template: __webpack_require__("./src/app/components/collapsable-nav/collapsable-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/collapsable-nav/collapsable-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CollapsableNavComponent);
    return CollapsableNavComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{contactData?.title}}</h5>\n    <p class=\"card-text\"></p>\n    <p id=\"emailContactContainer\" *ngIf=\"contactData?.contact?.email\" class=\"card-text\">\n      <strong id=\"emailContactLabel\">Contact</strong>:\n      <a id=\"emailContact\" href=\"mailto:{{contactData?.contact.email}}?subject=Slyce API\">{{contactData?.contact?.email}}</a>\n    </p>\n    <p id=\"versionContainer\" *ngIf=\"contactData?.version\" class=\"card-text\">\n      <span class=\"text-muted text-uppercase\">\n        <small id=\"apiVersionLabel\">api version:</small><span id=\"version\">{{contactData?.version}}</span>\n      </span>\n    </p>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_contact_model__ = __webpack_require__("./src/app/models/contact.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_contact_model__["a" /* ContactModel */])
    ], ContactComponent.prototype, "contactData", void 0);
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/endpoint/endpoint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"endpoint\" [id]='endpointData.operationId'>\n  <div class=\"operations\">\n    <div class=\"get operation\">\n      <div class=\"row\">\n        <div id='gridChange' class=\"content pt-3 pb-3\" [ngClass]=\"endpointsSharedService.isExamplesHidden ? 'col-lg-9 col-xl-9' : 'col-lg-6 col-xl-6'\">\n          <h4>\n            {{this.endpointData?.summary}}\n          </h4>\n\n\n          <div class=\"d-lg-flex break-all align-items-center\">\n            <div class=\"mr-auto\">\n              <h5>\n                <span *ngIf=\"this.endpointData.method\" id='methodBadge' class=\"http_method badge badge-primary\">{{this.endpointData.method}}</span>\n                <span *ngIf=\"this.endpointData.url\" id='url' class=\"path text-muted\">{{this.endpointData.url}}</span>\n              </h5>\n            </div>\n          </div>\n\n\n          <div id=\"description\" *ngIf=\"endpointData?.description\" class=\"markdown action-summary\">\n            <p>{{this?.endpointData?.description}}</p>\n          </div>\n\n          <h6>\n            <span *ngIf=\"this.endpointData.parameters && this.endpointData.parameters.length > 0\"> Parameters </span>\n            <span id=\"toggle-examples\" class=\"toggle-examples\" (click)=\"this.clickedToggleExamples()\">\n              <small class=\"text\">\n                <span class=\"sampleState\" *ngIf=\"endpointsSharedService.isExamplesHidden\">Show Samples</span>\n                <span class=\"sampleState\" *ngIf=\"!endpointsSharedService.isExamplesHidden\">Hide Samples</span>\n              </small>\n              <svg style=\"height:1em; width:1em;\" class=\"svg-inline--fa fa-code fa-w-18\" aria-hidden=\"true\" data-fa-processed=\"\" data-prefix=\"fal\"\n                data-icon=\"code\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n                <path fill=\"currentColor\" d=\"M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z\"></path>\n              </svg>\n            </span>\n          </h6>\n\n          <div data-content=\"\" class=\"operation-params card card-body bg-light mb-3\">\n\n            <div class=\"parameter-item container\">\n              <form #endpointForm=\"ngForm\">\n                <div id=\"parameters\" class=\"form-group row\">\n                  <div id=\"{{parm.name}}\" class=\"param\" *ngFor=\"let parm of this.endpointData?.parameters\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-4 col-xl-3\">\n                        <label class=\"param-property text-nowrap col-form-label\">\n                          <span [title]=\"parm.name\" class=\"text-shorten\">{{parm.name}}:</span>\n                          <small class=\"text-muted\">\n                            <em>{{parm?.in}}</em>\n                          </small>\n                        </label>\n                      </div>\n\n                      <div class=\"col-lg-8 col-xl-9\">\n                        <div *ngIf=\"parm['in'].toLowerCase() == 'body'\">\n                          <textarea placeholder=\"{{parm.required == true ? '(required)' : ''}}\" [required]='parm.required' [(ngModel)]='this.parameterFields[parm.name].value'\n                            class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" [name]='parm.name'></textarea>\n\n                          <div *ngIf=\"this.parm?.schema && this.Object.keys(this.parm?.schema).length !== 0\" class=\"parameter-content-type\">\n                            <div>\n                              <div class=\"media mt-2\">\n                                <label class=\"align-self-center mb-0 mr-3\">Content type:</label>\n                                <div class=\"media-body\">\n                                  <select class=\"parameter form-control form-control-sm\" name=\"responseContentType\">\n                                    <option [(ngValue)]=\"this.parameterFields[parm.name]['contentType']\" *ngFor=\"let option of this.endpointData.consumes\" value=\"option\">{{option}}</option>\n                                  </select>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div *ngIf=\"parm['in'].toLowerCase() !== 'body'\">\n                          <input class=\"parameter form-control \" minlength=\"0\" placeholder=\"{{parm.required == true ? '(required)' : ''}}\" [required]='parm.required'\n                            [(ngModel)]='this.parameterFields[parm.name].value' type=\"string\" [name]='parm.name' (change)=\"saveToLocalStorage($event)\">\n                        </div>\n                        <div class=\"parameter-content-type\"></div>\n                        <div class=\"small-description media mt-2\">\n                          <small>\n                            <pre *ngIf=\"parm.type !== null || parm.type.trim() !== ''\" class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">{{parm.type}}</code></pre>\n                          </small>\n                          <div class=\"media-body\">\n                            <small class=\"text-muted\">{{parm?.description}}</small>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n\n          </div>\n          <div>\n\n            <div class=\"sandbox_header mb-5\" data-content=\"\">\n              <button (click)=\"this.tryEndpointRequest(endpointForm)\" id=\"testEndpointBut799\" type=\"button\" class=\"btn btn-primary\">Test EndPoint</button>\n            </div>\n\n            <div class=\"response-content-type card card-body pb-3 bg-light mb-3\">\n              <div>\n                <div class=\"media\">\n                  <label class=\"align-self-center mb-0 mr-3\">Response Type:</label>\n                  <div class=\"media-body\">\n                    <select class=\"parameter form-control form-control-sm\" name=\"responseContentType\">\n                      <option [(ngValue)]=\"this.selectedResponse\" *ngFor=\"let option of this.endpointData?.produces\" value=\"application/json\">{{option}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <h6>\n              Status Codes\n            </h6>\n            <div class=\"card\">\n              <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"!this.endpointData.responses || Object.keys(this.endpointData.responses).length < 1\" class=\"list-group-item\">\n                  <div>\n                    <span style=\"padding-right:2em;\">\n                      No Status Codes Available\n                    </span>\n                  </div>\n                </li>\n                <li *ngFor=\"let s of this.Object.keys(this.endpointData.responses)\" class=\"list-group-item\">\n                  <div>\n                    <span style=\"padding-right:2em;\">\n                      {{s}}\n                    </span>\n                    <span>\n                      {{this.endpointData.responses[s].description}}\n                    </span>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"samples\" [ngClass]=\"endpointsSharedService.isExamplesHidden ? 'col-lg-3 col-xl-3 d-none' : 'col-lg-6 col-xl-6'\">\n          <app-example-side-bar [endpoint]=\"this.endpointData\" (clickedBodySample)=\"populateBody($event)\"></app-example-side-bar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/endpoint/endpoint.component.scss":
/***/ (function(module, exports) {

module.exports = ".param {\n  width: 100%; }\n  .param > .row {\n    padding: 10px 0; }\n  .param-property {\n  width: 100%; }\n  #testEndpointBut799 {\n  padding-left: 2em;\n  padding-right: 2em; }\n  .toggle-examples {\n  float: right;\n  cursor: pointer;\n  color: #868e96; }\n  .toggle-examples:hover {\n    color: #6c757d; }\n  .samples, .content {\n  -webkit-transition: unset !important;\n  transition: unset !important; }\n  textarea {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 0.66rem; }\n"

/***/ }),

/***/ "./src/app/components/endpoint/endpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_endpoint_clicked_test_res__ = __webpack_require__("./src/app/models/endpoint/clicked-test-res.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_endpoints_shared_service__ = __webpack_require__("./src/app/services/endpoints-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_vars_service__ = __webpack_require__("./src/app/services/shared-vars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EndpointComponent = /** @class */ (function () {
    function EndpointComponent(endpointsSharedService, notify, sharedVarsService, localStorageService) {
        this.endpointsSharedService = endpointsSharedService;
        this.notify = notify;
        this.sharedVarsService = sharedVarsService;
        this.localStorageService = localStorageService;
        /* Call back on sample toggle */
        this.clickedSample = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /* Call back on test button click */
        this.clickedTestEndPoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /* Inputed values from user for each parameter otherwise go default */
        this.parameterFields = {};
        this.Object = Object;
    }
    EndpointComponent.prototype.ngOnInit = function () {
        this.initParameterFields();
        this.initSelectedResponse();
        // this.endpointsSharedService.onEndpointsExamplesToggle()
        //   .subscribe( value => {
        //     this.isExamplesHidden = value;
        //   });
    };
    EndpointComponent.prototype.ngAfterViewInit = function () {
        if (this.endpointData.operationId === this.scrollToId) {
            this.scrollToElem(this.scrollToId);
        }
    };
    EndpointComponent.prototype.ngOnChanges = function (changes) {
        if (changes.scrollToId.currentValue) {
            if (this.endpointData.operationId === changes.scrollToId.currentValue) {
                this.scrollToElem(changes.scrollToId.currentValue);
            }
        }
        else if (changes.scrollToId.currentValue === null) {
            this.scrollToElem();
        }
    };
    /* Init the default parameters to the parameter fields */
    EndpointComponent.prototype.initParameterFields = function () {
        var _this = this;
        var params = this.endpointData.parameters;
        for (var p in params) {
            if (params[p].hasOwnProperty('name')) {
                params[p].value = params[p].default;
                this.parameterFields[params[p].name] = params[p];
                if (this.sharedVarsService.sharedVars[params[p].name]) {
                    (function (elem) {
                        _this.sharedVarsService.sharedVars[elem]
                            .subscribe(function (value) {
                            _this.parameterFields[elem].value = value;
                        });
                    })(params[p].name);
                }
            }
        }
    };
    EndpointComponent.prototype.saveToLocalStorage = function (event) {
        var name = event.srcElement.getAttribute('ng-reflect-name');
        if (this.sharedVarsService.sharedVars[name]) {
            this.sharedVarsService.sharedVars[name].next(event.srcElement.value);
            this.localStorageService.setStorageVar(name, event.srcElement.value);
        }
    };
    EndpointComponent.prototype.scrollToElem = function (id) {
        if (id) {
            var elem = document.getElementById(id);
            if (elem) {
                window.scrollTo(0, elem.offsetTop + 40);
                // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, elem.offsetTop);
            }
        }
        else {
            window.scrollTo(0, 0 + 40);
            // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, 0);
        }
    };
    EndpointComponent.prototype.smoothScroll = function (currentPosition, targetPosition) {
        if (currentPosition < targetPosition) {
            // scroll down
            var i_1 = currentPosition;
            var interval_1 = setInterval(function () {
                window.scrollTo(0, i_1);
                i_1 += 100;
                if (i_1 >= targetPosition) {
                    window.scrollTo(0, targetPosition + 40);
                    clearInterval(interval_1);
                }
            }, 15);
        }
        else {
            // scoll up
            var i_2 = currentPosition;
            var interval_2 = setInterval(function () {
                window.scrollTo(0, i_2);
                i_2 -= 100;
                if (i_2 <= targetPosition) {
                    window.scrollTo(0, targetPosition + 40);
                    clearInterval(interval_2);
                }
            }, 15);
        }
    };
    EndpointComponent.prototype.tryEndpointRequest = function (endpointForm) {
        var invalidFields = [];
        for (var key in endpointForm.controls) {
            if (endpointForm.controls.hasOwnProperty(key)) {
                var element = endpointForm.controls[key];
                if (element.invalid) {
                    invalidFields.push(key);
                }
            }
        }
        if (endpointForm.invalid) {
            this.notify.error('Error', invalidFields.join(', ') + ' required!');
        }
        this.clickedTestEndPoint.emit(this.clickTestEndPointButton());
    };
    EndpointComponent.prototype.populateBody = function (event) {
        this.parameterFields['body'].value = event;
    };
    EndpointComponent.prototype.initSelectedResponse = function () {
        this.selectedResponse = this.endpointData.produces ? this.endpointData.produces[0] : null;
    };
    EndpointComponent.prototype.clickTestEndPointButton = function () {
        return (new __WEBPACK_IMPORTED_MODULE_2__models_endpoint_clicked_test_res__["a" /* AppClickedTestRes */](this.endpointData, this.selectedResponse, this.parameterFields));
    };
    EndpointComponent.prototype.clickedToggleExamples = function () {
        this.endpointsSharedService.endpointsExamplesToggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EndpointComponent.prototype, "scrollToId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endpointData'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["a" /* AppEndPoint */])
    ], EndpointComponent.prototype, "endpointData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedSample'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EndpointComponent.prototype, "clickedSample", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedTestEndPoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EndpointComponent.prototype, "clickedTestEndPoint", void 0);
    EndpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-endpoint',
            template: __webpack_require__("./src/app/components/endpoint/endpoint.component.html"),
            styles: [__webpack_require__("./src/app/components/endpoint/endpoint.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_endpoints_shared_service__["a" /* EndpointsSharedService */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_6__services_shared_vars_service__["a" /* SharedVarsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */]])
    ], EndpointComponent);
    return EndpointComponent;
}());



/***/ }),

/***/ "./src/app/components/example-collapsible/example-collapsible.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 0px 20px 0px 20px\">\n  <nav class=\"nav flex-column parent_menu\" [ngClass]=\"{'expanded' : !collapsed}\">\n    <nav (click)=\"toggleCollapse()\" class=\"collapsable-nav-header\" routerLinkActive=\"active\">\n      <h5 class=\"nav-header\">{{this.header}}</h5>\n      <div class=\"toggle-collapse\">\n        <i class=\"fas fa-angle-down\"></i>\n      </div>\n    </nav>\n    <nav [ngStyle]=\"{display:this.collapsed ? 'none' : 'block'}\" class=\"collapsable-nav-body nav flex-column sub_menu\">\n      <div *ngIf=\"this.type?.toLowerCase() == 'schema'\">\n        <app-param-console [title]=\"'Parent'\" [schema]=\"this.schema\"></app-param-console>\n      </div>\n\n      <div *ngIf=\"this.type?.toLowerCase() == 'sample'\" class=\"sample-snippet rounded\">\n        <pre class=\"sample-body\" (click)=\"this.clickedSample.emit(this.generatedSample.json)\">\n          <!-- <code [innerHTML] = 'this.generatedSample?.highlight' class=\"hljs json\" id=\"sample79815\"></code> -->\n          <code appJsonFormat [json]=\"this.generatedSample?.json\"></code>\n        </pre>\n      </div>\n    </nav>\n  </nav>\n</div>\n<hr>\n"

/***/ }),

/***/ "./src/app/components/example-collapsible/example-collapsible.component.scss":
/***/ (function(module, exports) {

module.exports = "/* Method Badge Colors */\n/* Nav Arrow Color */\n.collapsable-nav-header {\n  padding: 1rem 0;\n  position: relative;\n  cursor: pointer; }\n.collapsable-nav-body {\n  margin-bottom: 1rem; }\nhr {\n  margin: 0; }\nnav {\n  width: 100%;\n  color: #212529; }\n.nav-link {\n  padding: .5rem 1rem; }\n.toggle-collapse {\n  width: 20px;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  right: 0; }\n.toggle-collapse i {\n    -webkit-transition: -webkit-transform .3s;\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n.expanded .toggle-collapse i {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n#sample79815 {\n  border-radius: 5px; }\npre {\n  font-size: 0; }\npre code {\n    font-size: 1rem; }\n.nav-header {\n  margin-bottom: 0; }\n.schema-property {\n  margin: 0 15px; }\n"

/***/ }),

/***/ "./src/app/components/example-collapsible/example-collapsible.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleCollapsibleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_highlight_js___ = __webpack_require__("./node_modules/highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_highlight_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_highlight_js___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExampleCollapsibleComponent = /** @class */ (function () {
    function ExampleCollapsibleComponent(swaggerService) {
        this.swaggerService = swaggerService;
        // Returns string of the schema sample
        this.clickedSample = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Socket Options
        this.collapsed = true;
        this.Object = Object;
        this.generatedSample = null;
    }
    ExampleCollapsibleComponent.prototype.ngOnInit = function () {
        this.initLazySampleGenrator();
    };
    ExampleCollapsibleComponent.prototype.initLazySampleGenrator = function () {
        var _this = this;
        if (!this.collapsed && !this.generatedSample) {
            this.setSampleFromSchema(this.schema);
        }
        this.swaggerService.getApiData().subscribe(function (res) {
            // If the swagger service reinitializes, then regeneration of the generated samples are required.
            _this.generatedSample = null;
        });
    };
    ExampleCollapsibleComponent.prototype.toggleCollapse = function () {
        this.collapsed = !this.collapsed;
        if (!this.collapsed) {
            this.setSampleFromSchema(this.schema);
        }
    };
    ExampleCollapsibleComponent.prototype.setSampleFromSchema = function (schema) {
        if (!this.generatedSample) {
            var temp = this.generateSample(schema);
            temp = JSON.stringify(JSON.parse(temp), null, 4);
            this.generatedSample = {};
            this.generatedSample['highlight'] = __WEBPACK_IMPORTED_MODULE_2__node_modules_highlight_js___["highlight"]('json', temp).value;
            this.generatedSample['json'] = temp;
        }
    };
    ExampleCollapsibleComponent.prototype.generateSample = function (schema) {
        if (schema.type === 'object') {
            var s1 = this.generateSampleFromObject(schema);
            return (s1);
        }
        else if (schema.type === 'array') {
            var s2 = this.generateSampleFromArray(schema);
            return (s2);
        }
    };
    ExampleCollapsibleComponent.prototype.generateSampleFromArray = function (schema) {
        var temp = '[';
        if (schema.items) {
            if (schema.items.type) {
                if (schema.items.type.toLowerCase() === 'object' || schema.items.type.toLowerCase() === 'array') {
                    temp = temp + '\n';
                    temp = temp + this.generateSample(schema.items);
                }
                else {
                    var type = schema.items.type ? schema.items.type.toString().escapeSpecialChars() : schema.items.type;
                    temp = temp + ("\"" + type + "\"");
                }
            }
        }
        temp = temp + ']';
        return (temp);
    };
    ExampleCollapsibleComponent.prototype.generateSampleFromObject = function (schema) {
        if (!schema.properties) {
            schema.properties = {};
        }
        if (schema.example) {
            Object.keys(schema.example).forEach(function (exampleName) {
                if (!schema.properties[exampleName]) {
                    schema.properties[exampleName] = {};
                }
                schema.properties[exampleName]['example'] = schema.example[exampleName];
            });
        }
        var temp = '{ \n';
        var keys = Object.keys(schema.properties);
        for (var i = 0; i < keys.length; i++) {
            if (schema.properties.hasOwnProperty(keys[i])) {
                temp = temp + "\"" + keys[i] + "\"";
                if (schema.properties[keys[i]].type != null && (schema.properties[keys[i]].type.toLowerCase() === 'object' ||
                    schema.properties[keys[i]].type.toLowerCase() === 'array')) {
                    var schema2 = schema.properties[keys[i]];
                    temp = temp + ' : ' + this.generateSample(schema2);
                }
                else {
                    var property = schema.properties[keys[i]];
                    var example = property.example ? property.example.toString().escapeSpecialChars() : property.example;
                    temp = temp + ": \"" + example + "\"";
                }
                if (i < keys.length - 1) {
                    temp = temp + ',';
                }
            }
        }
        temp = temp + '}';
        return (temp);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('header'),
        __metadata("design:type", Object)
    ], ExampleCollapsibleComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('type'),
        __metadata("design:type", String)
    ], ExampleCollapsibleComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('schema'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["d" /* Schema */])
    ], ExampleCollapsibleComponent.prototype, "schema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedSample'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ExampleCollapsibleComponent.prototype, "clickedSample", void 0);
    ExampleCollapsibleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-example-collapsible',
            template: __webpack_require__("./src/app/components/example-collapsible/example-collapsible.component.html"),
            styles: [__webpack_require__("./src/app/components/example-collapsible/example-collapsible.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_swagger_service__["a" /* SwaggerService */]])
    ], ExampleCollapsibleComponent);
    return ExampleCollapsibleComponent;
}());



/***/ }),

/***/ "./src/app/components/example-side-bar/example-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"appEndPoint\" *ngIf=\"!this.endpoint.protocol\">\n  <app-example-collapsible class=\"request-body-sample\" (clickedSample)=\"this.clickedBodySample.emit($event)\" *ngIf=\"this.requestSchema\" [header]=\"'Body Sample'\" [type]=\"'sample'\" [schema]=\"this.requestSchema\"></app-example-collapsible>\n  <app-example-collapsible *ngIf=\"this.requestSchema\" [header]=\"'Body Schema'\" [type]=\"'schema'\" [schema]=\"this.requestSchema\"></app-example-collapsible>\n\n  <app-example-collapsible *ngIf=\"this.responseSchema\" [header]=\"'Response Sample'\" [type]=\"'sample'\" [schema]=\"this.responseSchema\"></app-example-collapsible>\n  <app-example-collapsible *ngIf=\"this.responseSchema\" [header]=\"'Response Schema'\" [type]=\"'schema'\" [schema]=\"this.responseSchema\"></app-example-collapsible>\n</div>\n\n\n<div id=\"socketEndpoint\" *ngIf=\"this.endpoint.protocol\">\n  <!--Request Messages-->\n  <div id=\"{{'request' + j}}\" *ngFor=\"let m of this.endpoint?.requestMessages | getIndex: this.showRequestMessageOfIndex; let j = index\">\n    <app-example-collapsible id=\"{{'requestSample' + j}}\" (clickedSample)=\"this.clickedBodySample.emit($event)\" *ngIf=\"m.schema\" [header]=\"'Request Sample'\" [type]=\"'sample'\" [schema]=\"m.schema\"></app-example-collapsible>\n    <app-example-collapsible id=\"{{'requestSchema' + j}}\" *ngIf=\"m.schema\" [header]=\"'Request Schema'\" [type]=\"'schema'\" [schema]=\"m.schema\"></app-example-collapsible>\n  </div>\n  <!--Response Messages-->\n  <div style=\"padding: 20px 20px 20px 20px\">\n    <nav class=\"\">\n      <nav routerLinkActive=\"active\">\n        <h5>Responses</h5>\n        <tabset>\n          <tab *ngFor=\"let m of this.endpoint?.responseMessages; let i = index\" heading=\"{{('Response ' +1)}}\" id=\"{{'response' + i}}\">\n            <div class='socketMessageDescription'style=\"padding: 5px\">\n              {{m.description}}\n            </div>\n            <app-example-collapsible id=\"{{'responseSample' + i}}\" *ngIf=\"m.schema\" [header]=\"'Sample'\" [type]=\"'sample'\" [schema]=\"m.schema\"></app-example-collapsible>\n            <app-example-collapsible id=\"{{'responseSchema' + i}}\" *ngIf=\"m.schema\" [header]=\"'Schema'\" [type]=\"'schema'\" [schema]=\"m.schema\"></app-example-collapsible>\n          </tab>\n        </tabset>\n      </nav>\n    </nav>\n  </div>\n</div>\n<h5 *ngIf=\"(!this.responseSchema && !this.requestSchema) && (!_isArray(this.endpoint.requestMessages) && !_isArray(this.endpoint.responseMessages))\" class=\"no-samples text-muted\">No Samples</h5>\n"

/***/ }),

/***/ "./src/app/components/example-side-bar/example-side-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ".no-samples {\n  padding: calc(15px + 1rem); }\n\n.socketMessageDescription {\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/components/example-side-bar/example-side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleSideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleSideBarComponent = /** @class */ (function () {
    function ExampleSideBarComponent() {
        // If provided, show the Request message with index value, otherwise show all, if invalid index show none
        this.showRequestMessageOfIndex = null;
        this.clickedBodySample = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ExampleSideBarComponent.prototype.ngOnInit = function () {
        this.initializeRestEndPoint();
    };
    ExampleSideBarComponent.prototype.initializeRestEndPoint = function () {
        var _this = this;
        if (this.endpoint.parameters !== null) {
            this.endpoint.parameters.forEach(function (p) {
                if (p.in.toLowerCase() === 'body') {
                    _this.requestSchema = p.schema;
                }
            });
        }
        var endpoint = this.endpoint;
        if (endpoint.responses && endpoint.responses['200'] && endpoint.responses['200'].schema) {
            this.responseSchema = endpoint.responses['200'].schema;
        }
    };
    /**
     * Check if the array exist and if it is filled with anything
     * @param array
     * @returns {boolean}
     */
    ExampleSideBarComponent.prototype._isArray = function (array) {
        if (array && array.length > 0) {
            return (true);
        }
        else {
            return (false);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endpoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["b" /* Endpoint */])
    ], ExampleSideBarComponent.prototype, "endpoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showRequestMessageOfIndex'),
        __metadata("design:type", Number)
    ], ExampleSideBarComponent.prototype, "showRequestMessageOfIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedBodySample'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ExampleSideBarComponent.prototype, "clickedBodySample", void 0);
    ExampleSideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-example-side-bar',
            template: __webpack_require__("./src/app/components/example-side-bar/example-side-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/example-side-bar/example-side-bar.component.scss")]
        })
    ], ExampleSideBarComponent);
    return ExampleSideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/param-console/param-console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"schema-description rounded\">\n  <span class=\"strong objectName\">\n    <span class=\"bracketsIcon\"></span>\n    <span class=\"objectNameText\">{{this.title.toUpperCase()}}</span>\n  </span>\n\n  <div [id]=\"p\" class=\"schema-property\" *ngFor=\"let p of (this.schema.properties ? this.Object.keys(this.schema.properties) : [])\">\n    <span class=\"propLabels\">\n      <span class=\"propName propOpt\">\n        {{p}}\n      </span>\n      <span class=\"propType\" *ngIf=\"this.schema.properties[p].type\" title=\"{{this.schema.properties[p].type}}\">\n        {{this.schema.properties[p].type}}\n      </span>\n      <span class=\"propOptKey text-muted\">\n        {{this.getFieldRequirementText(this.schema.properties[p]?.required)}}\n      </span>\n    </span>\n    <span *ngIf=\"this.schema.properties[p].description; else noDescr\" class=\"propDesc\">{{this.schema.properties[p].description}}</span>\n    <ng-template #noDescr>\n        <span class=\"propDesc text-muted\">No description</span>\n    </ng-template>\n  </div>\n\n\n\n</div>\n\n\n<div *ngFor=\"let p of (this.schema.properties ? this.Object.keys(this.schema.properties) : [])\">\n  <app-param-console [title]=\"p\" *ngIf=\"this.schema.properties[p].type == 'object'\" [schema]=\"this.schema.properties[p]\"></app-param-console>\n</div>\n"

/***/ }),

/***/ "./src/app/components/param-console/param-console.component.scss":
/***/ (function(module, exports) {

module.exports = ".propLabels {\n  padding: 0px 0px 0px 0px; }\n\n.propDesc {\n  padding: 0px 0px 0px 0px; }\n\n@media (max-width: 991px) {\n    .propDesc {\n      right-padding: 15px;\n      padding: 15px 15px 15px 15px; } }\n\n.schema-description .objectName, .sample-snippet .objectName {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n.schema-description > div, .sample-snippet > div {\n  margin: 0; }\n\n.schema-description[_ngcontent-c2] .objectName[_ngcontent-c2], .sample-snippet[_ngcontent-c2] .objectName[_ngcontent-c2] {\n  border-radius: 0.25rem !important; }\n"

/***/ }),

/***/ "./src/app/components/param-console/param-console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParamConsoleComponent = /** @class */ (function () {
    function ParamConsoleComponent() {
        this.OPTIONAL = '(optional)';
        this.REQUIRED = '(required)';
        this.Object = Object;
        this.title = 'No Title';
    }
    ParamConsoleComponent.prototype.getFieldRequirementText = function (isRequired) {
        return (isRequired ? this.REQUIRED : this.OPTIONAL);
    };
    ParamConsoleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('schema'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["d" /* Schema */])
    ], ParamConsoleComponent.prototype, "schema", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", Object)
    ], ParamConsoleComponent.prototype, "title", void 0);
    ParamConsoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-param-console',
            template: __webpack_require__("./src/app/components/param-console/param-console.component.html"),
            styles: [__webpack_require__("./src/app/components/param-console/param-console.component.scss")]
        })
    ], ParamConsoleComponent);
    return ParamConsoleComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar-nav/sidebar-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 d-none d-lg-block\">\n  <label class=\"text-uppercase mt-3 mb-0\">API Reference</label>\n</div>\n\n<app-collapsable-nav *ngFor=\"let tag of arrayOfTags\" [endpoints]='tag.tagValue' [tag]=\"tag.tagName\" [sectionToExpand]='sectionToExpand'></app-collapsable-nav>\n"

/***/ }),

/***/ "./src/app/components/sidebar-nav/sidebar-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/sidebar-nav/sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent() {
        this.sectionToExpand = null;
        this.arrayOfTags = [];
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
    };
    SidebarNavComponent.prototype.ngOnChanges = function (changes) {
        if (changes.tags && changes.tags.currentValue) {
            this.arrayOfTags = Object.keys(changes.tags.currentValue).map(function (key) {
                return {
                    'tagName': key,
                    'tagValue': changes.tags.currentValue[key]
                };
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SidebarNavComponent.prototype, "tags", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidebarNavComponent.prototype, "sectionToExpand", void 0);
    SidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar-nav',
            template: __webpack_require__("./src/app/components/sidebar-nav/sidebar-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar-nav/sidebar-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarNavComponent);
    return SidebarNavComponent;
}());



/***/ }),

/***/ "./src/app/components/socket-endpoint/socket-endpoint.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"endpoint\" [id]='endpointData.operationId'>\n  <div class=\"operations\">\n    <div class=\"get operation\">\n      <div class=\"row\">\n        <div id='gridChange' class=\"content pt-3 pb-3\" [ngClass]=\"endpointsSharedService.isExamplesHidden ? 'col-lg-9 col-xl-9' : 'col-lg-6 col-xl-6'\">\n          <h4>\n            {{this.endpointData?.summary}}\n          </h4>\n\n\n          <div class=\"d-lg-flex break-all align-items-center\">\n            <div class=\"mr-auto\">\n              <h5>\n                <span *ngIf=\"this.endpointData.method\" id='methodBadge' class=\"http_method badge badge-primary\">{{this.endpointData.method}}</span>\n                <span *ngIf=\"this.endpointData.url\" id='url' class=\"path text-muted\">{{this.endpointData.url}}</span>\n              </h5>\n            </div>\n          </div>\n\n\n          <div id=\"description\" *ngIf=\"endpointData?.description\" class=\"markdown action-summary\">\n            <p>{{this?.endpointData?.description}}</p>\n          </div>\n\n          <h6>\n            <span *ngIf=\"this.endpointData.parameters && this.endpointData.parameters.length > 0\"> Parameters </span>\n            <span id=\"toggle-examples\" class=\"toggle-examples\" (click)=\"this.clickedToggleExamples()\">\n              <small class=\"text\">\n                <span class=\"sampleState\" *ngIf=\"endpointsSharedService.isExamplesHidden\">Show Samples</span>\n                <span class=\"sampleState\" *ngIf=\"!endpointsSharedService.isExamplesHidden\">Hide Samples</span>\n              </small>\n              <svg style=\"height:1em; width:1em;\" class=\"svg-inline--fa fa-code fa-w-18\" aria-hidden=\"true\" data-fa-processed=\"\" data-prefix=\"fal\"\n                data-icon=\"code\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\">\n                <path fill=\"currentColor\" d=\"M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z\"></path>\n              </svg>\n            </span>\n          </h6>\n\n          <div data-content=\"\" class=\"operation-params card card-body bg-light mb-3\">\n            <div class=\"parameter-item container\">\n              <form #endpointForm=\"ngForm\">\n                <div id=\"parameters\" class=\"form-group row\">\n                  <div id=\"{{parm.name}}\" class=\"param\" *ngFor=\"let parm of this.endpointData?.parameters\">\n\n                    <div class=\"row\" *ngIf=\"parm['in'].toLowerCase() !== 'body'\">\n                      <div class=\"col-lg-4 col-xl-3 text-shorten\">\n                        <label class=\"param-property text-nowrap col-form-label\">\n                          <span [title]=\"parm.name\">{{parm.name}}:</span>\n                          <br>\n                          <small class=\"text-muted\">\n                            <em>{{parm?.in}}</em>\n                          </small>\n                        </label>\n                      </div>\n\n                      <div class=\"col-lg-8 col-xl-9\">\n\n                        <div>\n                          <input class=\"parameter form-control \" minlength=\"0\" placeholder=\"{{parm.required == true ? '(required)' : ''}}\" [required]='parm.required'\n                            [(ngModel)]='this.parameterFields[parm.name].value' type=\"string\" [name]='parm.name'>\n                        </div>\n\n                        <div class=\"parameter-content-type\"></div>\n                        <div class=\"small-description media mt-2\">\n                          <small>\n                            <pre *ngIf=\"parm.type !== null || parm.type.trim() !== ''\" class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">{{parm.type}}</code></pre>\n                          </small>\n                          <div class=\"media-body\">\n                            <small class=\"text-muted\">{{parm?.description}}</small>\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n\n                  </div>\n\n\n                  <tabset>\n                    <tab [heading]=\"'Request ' + (i + 1)\" *ngFor=\"let parm of this.endpointData['requestMessages']; let i = index\" (select)=\"this.selectedRequestType = i;\">\n                      <div class=\"param\">\n                        <div class=\"row\">\n                          <div class=\"col-lg-4 col-xl-3\">\n                            <label class=\"param-property text-nowrap col-form-label\">\n                              <br>\n                              <small class=\"text-muted\">\n                                <em>{{parm?.in}}</em>\n                              </small>\n                            </label>\n                          </div>\n\n                          <div class=\"col-lg-8 col-xl-9\">\n                            <textarea placeholder=\"{{parm.required == true ? '(required)' : ''}}\" [required]='parm.required' [(ngModel)]=\"this.endpointData['requestMessages'][i].value\"\n                              class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" [name]='parm.description'></textarea>\n\n                            <div class=\"parameter-content-type\"></div>\n                            <div class=\"small-description media mt-2\">\n                              <small>\n                                <pre *ngIf=\"parm.type !== null || parm.type.trim() !== ''\" class=\"mb-0 mr-2\"><code class=\"code-signature hljs rounded\">{{parm.type}}</code></pre>\n                              </small>\n                              <div class=\"media-body\">\n                                <small class=\"text-muted\">{{parm?.description}}</small>\n                              </div>\n                            </div>\n                            <div data-toggle=\"tooltip\" title=\"Alternative input that can be applied to request body...\" class=\"alt-input\" *ngIf=\"parm.schema && parm.schema.properties\">\n                                <div id=\"altInputs\" *ngFor=\"let propKey of this.Object.keys(parm.schema.properties)\">\n                                  <app-alt-input [header]=\"propKey\" [type]=\"parm.schema.properties[propKey].type\" [format]=\"parm.schema.properties[propKey].format\" (event)=\"this.processAltInput($event,this.selectedRequestType, propKey)\"></app-alt-input>\n                                </div>\n                            </div>\n                            <!--<div *ngIf=\"this.parm?.schema && this.Object.keys(this.parm?.schema).length !== 0\" class=\"parameter-content-type\">\n                              <div>\n                                <div class=\"media mt-2\">\n                                  <label class=\"align-self-center mb-0 mr-3\">Content type:</label>\n                                  <div class=\"media-body\">\n                                    <select class=\"parameter form-control form-control-sm\" name=\"responseContentType\">\n                                      <option *ngFor=\"let option of this.endpointData.consumes\" value=\"option\">{{option}}</option>\n                                    </select>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>-->\n                          </div>\n\n                        </div>\n                      </div>\n                    </tab>\n                  </tabset>\n                </div>\n              </form>\n\n            </div>\n          </div>\n\n          <div>\n\n            <div class=\"sandbox_header mb-5\" data-content=\"\">\n              <button type=\"button\" class=\"btn\" (click)=\"this.openSocketConnection()\" [ngClass]=\"{'btn-primary': !this.isConnectionStarted, 'btn-danger': this.isConnectionStarted }\">{{this.isConnectionStarted ? 'Close Connection' : 'Start Connecion'}}</button>\n              <button (click)=\"this.sendSocketMessage()\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"!this.isConnectionStarted\">Send Message</button>\n              <button (click)=\"this.showMessagesClicked()\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"this.socketMessages.length === 0\">\n                See Messages\n                <span class=\"badge badge-success\">{{this.socketMessages.length}}</span>\n              </button>\n            </div>\n\n            <div class=\"response-content-type card card-body pb-3 bg-light mb-3\">\n              <div>\n                <div class=\"media\">\n                  <label class=\"align-self-center mb-0 mr-3\">Response Type:</label>\n                  <div class=\"media-body\">\n                    <select class=\"parameter form-control form-control-sm\" name=\"responseContentType\">\n                      <option [(ngValue)]=\"this.selectedResponse\" *ngFor=\"let option of this.endpointData?.produces\" value=\"application/json\">{{option}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"samples\" [ngClass]=\"endpointsSharedService.isExamplesHidden ? 'col-lg-3 col-xl-3 d-none' : 'col-lg-6 col-xl-6'\">\n\n          <!-- can accept [selectedRequest]=\"this.selectedRequestType\" -->\n          <app-example-side-bar [showRequestMessageOfIndex] = \"this.selectedRequestType\" [endpoint]=\"this.endpointData\" (clickedBodySample)=\"applySampleBody($event, this.selectedRequestType)\" ></app-example-side-bar>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/socket-endpoint/socket-endpoint.component.scss":
/***/ (function(module, exports) {

module.exports = ".param {\n  width: 100%; }\n  .param > .row {\n    padding: 10px 0; }\n  .param-property {\n  width: 100%; }\n  #testEndpointBut799 {\n  padding-left: 2em;\n  padding-right: 2em; }\n  .toggle-examples {\n  float: right;\n  cursor: pointer;\n  color: #868e96; }\n  .toggle-examples:hover {\n    color: #6c757d; }\n  .samples, .content {\n  -webkit-transition: unset !important;\n  transition: unset !important; }\n  .tab-container {\n  width: 100%;\n  padding: 10px 0; }\n  .tab-pane {\n  padding-top: 5px; }\n  .alt-input {\n  padding-top: 10px;\n  padding-right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/socket-endpoint/socket-endpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketEndpointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_endpoint_clicked_test_res__ = __webpack_require__("./src/app/models/endpoint/clicked-test-res.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_endpoints_shared_service__ = __webpack_require__("./src/app/services/endpoints-shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_socket_socket_service__ = __webpack_require__("./src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__ = __webpack_require__("./src/app/components/alt-input/model/AltInputEvent.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SocketEndpointComponent = /** @class */ (function () {
    function SocketEndpointComponent(endpointsSharedService, notify, socketService, swaggerService, localStorageService, notificationService) {
        this.endpointsSharedService = endpointsSharedService;
        this.notify = notify;
        this.socketService = socketService;
        this.swaggerService = swaggerService;
        this.localStorageService = localStorageService;
        this.notificationService = notificationService;
        /* Call back on sample toggle */
        this.clickedSample = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /* Call back on test button click */
        this.clickedTestEndPoint = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickedSeeSocketMessages = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /* Inputed values from user for each parameter otherwise go default */
        this.parameterFields = {};
        this.Object = Object;
        this.bodyParams = [];
        this.selectedRequestType = 0;
        this.isConnectionStarted = false;
        this.socketMessages = [];
        this.JSON = JSON;
        this.document = document;
        this.altInputs = {};
    }
    SocketEndpointComponent.prototype.ngOnInit = function () {
        this.initParameterFields();
        this.initSelectedResponse();
    };
    SocketEndpointComponent.prototype.ngAfterViewInit = function () {
        if (this.endpointData.operationId === this.scrollToId) {
            this.scrollToElem(this.scrollToId);
        }
    };
    SocketEndpointComponent.prototype.ngOnChanges = function (changes) {
        if (changes.scrollToId.currentValue) {
            if (this.endpointData.operationId === changes.scrollToId.currentValue) {
                this.scrollToElem(changes.scrollToId.currentValue);
            }
        }
        else if (changes.scrollToId.currentValue === null) {
            this.scrollToElem();
        }
    };
    SocketEndpointComponent.prototype.getElementById = function (id) {
        return document.getElementById(id);
    };
    /* Init the default parameters to the parameter fields */
    SocketEndpointComponent.prototype.initParameterFields = function () {
        for (var i = 0; i < this.endpointData['requestMessages'].length; i++) {
            var element = this.endpointData['requestMessages'][i];
            element.value = element.default || element.example || null;
        }
        var params = this.endpointData.parameters;
        for (var p in params) {
            if (params.hasOwnProperty(p)) {
                var element = params[p];
                element.value = element.default;
                this.parameterFields[element.name] = element;
                // if (element.in.toLocaleLowerCase() === 'body') {
                //   this.bodyParams.push(element);
                // }
                if (this.localStorageService.getStorageVar(element.name)) {
                    this.parameterFields[element.name].value = this.localStorageService.getStorageVar(element.name);
                }
            }
        }
    };
    SocketEndpointComponent.prototype.scrollToElem = function (id) {
        if (id) {
            var elem = document.getElementById(id);
            if (elem) {
                window.scrollTo(0, elem.offsetTop + 40);
                // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, elem.offsetTop);
            }
        }
        else {
            window.scrollTo(0, 0 + 40);
            // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, 0);
        }
    };
    SocketEndpointComponent.prototype.smoothScroll = function (currentPosition, targetPosition) {
        if (currentPosition < targetPosition) {
            // scroll down
            var i_1 = currentPosition;
            var interval_1 = setInterval(function () {
                window.scrollTo(0, i_1);
                i_1 += 100;
                if (i_1 >= targetPosition) {
                    window.scrollTo(0, targetPosition + 40);
                    clearInterval(interval_1);
                }
            }, 15);
        }
        else {
            // scoll up
            var i_2 = currentPosition;
            var interval_2 = setInterval(function () {
                window.scrollTo(0, i_2);
                i_2 -= 100;
                if (i_2 <= targetPosition) {
                    window.scrollTo(0, targetPosition + 40);
                    clearInterval(interval_2);
                }
            }, 15);
        }
    };
    SocketEndpointComponent.prototype.tryEndpointRequest = function (endpointForm) {
        var invalidFields = [];
        for (var key in endpointForm.controls) {
            if (endpointForm.controls.hasOwnProperty(key)) {
                var element = endpointForm.controls[key];
                if (element.invalid) {
                    invalidFields.push(key);
                }
            }
        }
        if (endpointForm.invalid) {
            this.notify.error('Error', invalidFields.join(', ') + ' required!');
        }
        this.clickedTestEndPoint.emit(this.clickTestEndPointButton());
    };
    SocketEndpointComponent.prototype.applySampleBody = function (event, selectedRequest) {
        this.endpointData['requestMessages'][selectedRequest].value = event;
    };
    SocketEndpointComponent.prototype.openSocketConnection = function () {
        var _this = this;
        if (!this.isConnectionStarted) {
            this.socketMessages = [];
            var request_1 = new __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["c" /* RequestInitiator */](new __WEBPACK_IMPORTED_MODULE_2__models_endpoint_clicked_test_res__["a" /* AppClickedTestRes */](this.endpointData, this.selectedResponse, this.parameterFields), this.localStorageService);
            this.swaggerService.getWsEndpoints().subscribe(function (data) {
                var params = _this.buildQueryParams(_this.parameterFields);
                var url = encodeURI(data.baseURL + _this.swaggerService.substitutePath(_this.endpointData.url, request_1.path) + params);
                _this.connection = _this.socketService.connect(url);
                _this.connection.onopen.subscribe(function (event) {
                    _this.isConnectionStarted = true;
                    // this.notify.info('Info', 'Connection open');
                });
                _this.connection.onclose.subscribe(function (event) {
                    _this.isConnectionStarted = false;
                    // this.socketMessages = [];
                    // this.notify.warn('Info', 'Connection close');
                });
                _this.connection.onmessage.subscribe(function (event) {
                    if (event) {
                        if (event.data && (JSON.parse(event.data)['error'] || JSON.parse(event.data)['errors'])) {
                            var response = JSON.parse(event.data);
                            var message = {};
                            message['msg_type'] = 'Error';
                            message['response'] = response;
                            _this.socketMessages.push(message);
                            _this.notify.error('Error', 'Status: ' +
                                (response['status'] || 'fail') + '. ' +
                                (response['error'] || response['errors'] || 'fail'));
                        }
                        else {
                            console.log(event);
                            _this.socketMessages.push(event);
                        }
                    }
                });
            });
        }
        else {
            this.connection.socket.close();
            this.socketMessages = [];
        }
    };
    SocketEndpointComponent.prototype.showMessagesClicked = function () {
        var socketData = {};
        socketData['url'] = this.connection.socket.url;
        socketData['messages'] = this.socketMessages;
        this.clickedSeeSocketMessages.emit(socketData);
    };
    SocketEndpointComponent.prototype.sendSocketMessage = function () {
        if (this.endpointData['requestMessages'][this.selectedRequestType].value) {
            this.connection.socket.send(this.endpointData['requestMessages'][this.selectedRequestType].value);
        }
    };
    SocketEndpointComponent.prototype.processAltInput = function (event, selectedRequest, field) {
        if (event.eventType === __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DATA) {
            if (!this.altInputs[selectedRequest]) {
                this.altInputs[selectedRequest] = {};
            }
            this.altInputs[selectedRequest][field] = event.data;
        }
        else if (event.eventType === __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.APPLY) {
            // STUB FUNCTION TO APPLY THE FIELD INTO THE BODY
            this.substituteToBody(selectedRequest, field, __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.APPLY);
        }
        else if (event.eventType === __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DELETE) {
            delete this.altInputs[selectedRequest][field];
            this.substituteToBody(selectedRequest, field, __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DELETE);
        }
    };
    SocketEndpointComponent.prototype.substituteToBody = function (selectedRequest, field, eventType) {
        if (this.selectedResponse === 'application/json') {
            // substitution for application json
            if (!this.endpointData['requestMessages'][selectedRequest].value) {
                // generate the json with the alt information inside
                this.endpointData['requestMessages'][selectedRequest].value = JSON.stringify(this.altInputs[selectedRequest], null, 4);
            }
            else {
                try {
                    var obj = (JSON).parse(this.endpointData['requestMessages'][selectedRequest].value);
                    if (field) {
                        // apply to just that field
                        obj[field] = this.altInputs[selectedRequest][field];
                    }
                    else {
                        // apply to all
                        obj = Object.assign(obj, this.altInputs[selectedRequest]);
                    }
                    this.endpointData['requestMessages'][selectedRequest].value = JSON.stringify(obj, null, 4);
                    if (eventType === __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.DELETE) {
                        this.notificationService.warn("Deleted substitution on " + field);
                    }
                    else if (eventType === __WEBPACK_IMPORTED_MODULE_8__alt_input_model_AltInputEvent_model__["a" /* AltInputEventModel */].EVENT_TYPES.APPLY) {
                        this.notificationService.success("Applied substitution on " + field);
                    }
                }
                catch (e) {
                    this.notificationService.error("Unable to apply to incorrectly formatted JSON");
                }
            }
        }
        else {
            this.notificationService.alert(this.selectedResponse + " is not supported");
        }
    };
    SocketEndpointComponent.prototype.buildQueryParams = function (params) {
        var result = '?';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var element = params[key];
                if (element.in.toLocaleLowerCase() === 'query') {
                    result += element.name + '=' + element.value + '&';
                }
            }
        }
        return result;
    };
    SocketEndpointComponent.prototype.initSelectedResponse = function () {
        this.selectedResponse = this.endpointData.produces ? this.endpointData.produces[0] : null;
    };
    SocketEndpointComponent.prototype.clickTestEndPointButton = function () {
        return (new __WEBPACK_IMPORTED_MODULE_2__models_endpoint_clicked_test_res__["a" /* AppClickedTestRes */](this.endpointData, this.selectedResponse, this.parameterFields));
    };
    SocketEndpointComponent.prototype.clickedToggleExamples = function () {
        this.endpointsSharedService.endpointsExamplesToggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SocketEndpointComponent.prototype, "scrollToId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endpointData'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_endpoint_endpoint_model__["a" /* AppEndPoint */])
    ], SocketEndpointComponent.prototype, "endpointData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedSample'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SocketEndpointComponent.prototype, "clickedSample", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('clickedTestEndPoint'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SocketEndpointComponent.prototype, "clickedTestEndPoint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SocketEndpointComponent.prototype, "clickedSeeSocketMessages", void 0);
    SocketEndpointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-socket-endpoint',
            template: __webpack_require__("./src/app/components/socket-endpoint/socket-endpoint.component.html"),
            styles: [__webpack_require__("./src/app/components/socket-endpoint/socket-endpoint.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_endpoints_shared_service__["a" /* EndpointsSharedService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__services_socket_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_swagger_service__["a" /* SwaggerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"]])
    ], SocketEndpointComponent);
    return SocketEndpointComponent;
}());



/***/ }),

/***/ "./src/app/directives/json-format.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonFormatDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_formatter_js__ = __webpack_require__("./node_modules/json-formatter-js/dist/json-formatter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_formatter_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_json_formatter_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JsonFormatDirective = /** @class */ (function () {
    function JsonFormatDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    JsonFormatDirective.prototype.ngOnChanges = function (changes) {
        if (changes.json.currentValue) {
            var options = {
                hoverPreviewEnabled: true,
                hoverPreviewArrayCount: 100,
                hoverPreviewFieldCount: 2,
            };
            if (typeof this.json === 'string') {
                this.json = JSON.parse(this.json);
            }
            this.el.nativeElement.innerHTML = '';
            var formatter = new __WEBPACK_IMPORTED_MODULE_1_json_formatter_js___default.a(this.json, 3, options);
            var elem = formatter.render();
            this.renderer.appendChild(this.el.nativeElement, elem);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], JsonFormatDirective.prototype, "json", void 0);
    JsonFormatDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appJsonFormat]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], JsonFormatDirective);
    return JsonFormatDirective;
}());



/***/ }),

/***/ "./src/app/models/MOCK_DATA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SCHEMA */
/* unused harmony export REQUEST_SCHEMA */
/* unused harmony export RESPONSE_SCHEMA */
/* unused harmony export REQUEST_INITIATOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPENDPOINT; });
/* unused harmony export WS_SPEC_MOCK */
/* unused harmony export WSENDPOINT */
var SCHEMA = {
    'type': 'object',
    'properties': {
        'sampleItems': {
            'type': 'array',
            'items': {
                'type': 'any',
                'required': []
            }
        },
        'items': {
            'type': 'array',
            'items': {
                'type': 'object',
                'required': [],
                'properties': {
                    'created_at': {
                        'type': 'string',
                        'format': 'date-time',
                        'description': 'The timestamp the item was created',
                        'example': '2018-01-04T20:13:55.373557+0000'
                    },
                    'created_by': {
                        'type': 'string',
                        'description': 'The user that created the item',
                        'example': 'system'
                    },
                    'updated_at': {
                        'type': 'string',
                        'format': 'date-time',
                        'description': 'The timestamp the item was last updated',
                        'example': '2018-01-04T20:13:55.373557+0000'
                    },
                    'updated_by': {
                        'type': 'string',
                        'description': 'The user that last updated the item',
                        'example': 'system'
                    },
                    'id': {
                        'type': 'string',
                        'description': 'The account id',
                        'example': 'test_inc'
                    },
                    'name': {
                        'type': 'string',
                        'description': 'The name of the account',
                        'example': 'Test, Inc.'
                    },
                    'is_active': {
                        'type': 'boolean',
                        'description': 'Whether an account is active or not.'
                    }
                },
                '$$ref': '#/definitions/AccountDoc'
            }
        },
        'page_number': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The current page number',
            'example': 1
        },
        'page_size': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The number of items returned',
            'example': 20
        },
        'total_pages': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The total number of pages available',
            'example': 1
        },
        'total_items': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The total number of items available',
            'example': 1
        }
    }
};
var REQUEST_SCHEMA = {
    'type': 'object',
    'required': [
        'name'
    ],
    'properties': {
        'name': {
            'type': 'string',
            'description': 'The name of the API key',
            'required': true,
            'example': 'DemoAPIKey'
        },
        'acl': {
            'type': 'object',
            'properties': null,
            'description': 'The access control list as an object with the operation as the key and the permission status as a boolean',
            'example': {
                'create-space': false,
                'get-space-by-id': true
            }
        }
    },
    'name': 'body',
    '$$ref': '#/definitions/NewAPIKeyDoc'
};
var RESPONSE_SCHEMA = {
    'type': 'object',
    'properties': {
        'sampleItems': {
            'type': 'array',
            'items': {
                'type': 'string',
                'required': []
            }
        },
        'items': {
            'type': 'array',
            'items': {
                'type': 'object',
                'required': [],
                'properties': {
                    'created_at': {
                        'type': 'string',
                        'format': 'date-time',
                        'description': 'The timestamp the item was created',
                        'example': '2018-01-04T20:13:55.373557+0000'
                    },
                    'created_by': {
                        'type': 'string',
                        'description': 'The user that created the item',
                        'example': 'system'
                    },
                    'updated_at': {
                        'type': 'string',
                        'format': 'date-time',
                        'description': 'The timestamp the item was last updated',
                        'example': '2018-01-04T20:13:55.373557+0000'
                    },
                    'updated_by': {
                        'type': 'string',
                        'description': 'The user that last updated the item',
                        'example': 'system'
                    },
                    'id': {
                        'type': 'string',
                        'description': 'The account id',
                        'example': 'test_inc'
                    },
                    'name': {
                        'type': 'string',
                        'description': 'The name of the account',
                        'example': 'Test, Inc.'
                    },
                    'is_active': {
                        'type': 'boolean',
                        'description': 'Whether an account is active or not.'
                    }
                },
                '$$ref': '#/definitions/AccountDoc'
            }
        },
        'page_number': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The current page number',
            'example': 1
        },
        'page_size': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The number of items returned',
            'example': 20
        },
        'total_pages': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The total number of pages available',
            'example': 1
        },
        'total_items': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The total number of items available',
            'example': 1
        }
    }
};
var REQUEST_INITIATOR = {
    'selectedResponse': 'application/json',
    'parameterFields': {
        'page_number': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The page number to get',
            'default': 1,
            'example': 1,
            'required': false,
            'in': 'query',
            'name': 'page_number',
            'value': 1
        },
        'page_size': {
            'type': 'integer',
            'format': 'int64',
            'description': 'The number of items to return',
            'default': 20,
            'example': 20,
            'required': false,
            'in': 'query',
            'name': 'page_size',
            'value': 20
        }
    },
    'endPointData': {
        'operationId': 'Accounts_create_account2',
        'summary': 'List the accounts',
        'description': 'Get a list of all accounts in the system.',
        'consumes': [
            'application/json'
        ],
        'produces': [
            'application/json'
        ],
        'tags': [
            'Accounts'
        ],
        'parameters': [
            {
                'type': 'integer',
                'format': 'int64',
                'description': 'The page number to get',
                'default': 1,
                'example': 1,
                'required': false,
                'in': 'query',
                'name': 'page_number',
                'value': 1
            },
            {
                'type': 'integer',
                'format': 'int64',
                'description': 'The number of items to return',
                'default': 20,
                'example': 20,
                'required': false,
                'in': 'query',
                'name': 'page_size',
                'value': 20
            }
        ],
        'responses': {
            '200': {
                'description': 'Successful Operation',
                'schema': {
                    'type': 'object',
                    'properties': {
                        'items': {
                            'type': 'array',
                            'items': {
                                'type': 'object',
                                'required': [],
                                'properties': {
                                    'created_at': {
                                        'type': 'string',
                                        'format': 'date-time',
                                        'description': 'The timestamp the item was created',
                                        'example': '2018-01-04T20:13:55.373557+0000'
                                    },
                                    'created_by': {
                                        'type': 'string',
                                        'description': 'The user that created the item',
                                        'example': 'system'
                                    },
                                    'updated_at': {
                                        'type': 'string',
                                        'format': 'date-time',
                                        'description': 'The timestamp the item was last updated',
                                        'example': '2018-01-04T20:13:55.373557+0000'
                                    },
                                    'updated_by': {
                                        'type': 'string',
                                        'description': 'The user that last updated the item',
                                        'example': 'system'
                                    },
                                    'id': {
                                        'type': 'string',
                                        'description': 'The account id',
                                        'example': 'test_inc'
                                    },
                                    'name': {
                                        'type': 'string',
                                        'description': 'The name of the account',
                                        'example': 'Test, Inc.'
                                    },
                                    'is_active': {
                                        'type': 'boolean',
                                        'description': 'Whether an account is active or not.'
                                    }
                                },
                                '$$ref': '#/definitions/AccountDoc'
                            }
                        },
                        'page_number': {
                            'type': 'integer',
                            'format': 'int64',
                            'description': 'The current page number',
                            'example': 1
                        },
                        'page_size': {
                            'type': 'integer',
                            'format': 'int64',
                            'description': 'The number of items returned',
                            'example': 20
                        },
                        'total_pages': {
                            'type': 'integer',
                            'format': 'int64',
                            'description': 'The total number of pages available',
                            'example': 1
                        },
                        'total_items': {
                            'type': 'integer',
                            'format': 'int64',
                            'description': 'The total number of items available',
                            'example': 1
                        }
                    }
                }
            }
        },
        'security': [
            {
                'slyce-account-id': []
            },
            {
                'slyce-api-key': []
            }
        ],
        '__originalOperationId': 'Accounts.create_account',
        'url': '/accounts/',
        'method': 'get'
    }
};
var APPENDPOINT = {
    'operationId': 'API_Keys_create_api_key1',
    'summary': 'Create a new API key',
    'description': 'Create a new API key with a name and access control options.',
    'consumes': [
        'application/json'
    ],
    'produces': [
        'application/json'
    ],
    'tags': [
        'API Keys'
    ],
    'parameters': [
        {
            'type': 'string',
            'required': true,
            'in': 'path',
            'name': 'account_id'
        },
        {
            'type': 'object',
            'name': 'body',
            'required': true,
            'in': 'body',
            'schema': {
                'type': 'object',
                'required': [
                    'name'
                ],
                'properties': {
                    'name': {
                        'type': 'string',
                        'description': 'The name of the API key',
                        'required': true,
                        'example': 'DemoAPIKey'
                    },
                    'acl': {
                        'type': 'object',
                        'properties': {},
                        'description': 'The access control list as an object with the operation as the key and the permission status as a boolean',
                        'example': {
                            'create-space': false,
                            'get-space-by-id': true
                        }
                    }
                },
                'name': 'body',
                '$$ref': '#/definitions/NewAPIKeyDoc'
            }
        }
    ],
    'responses': {
        '200': {
            'description': 'Successful Operation',
            'schema': {
                'type': 'object',
                'required': [],
                'properties': {
                    'topic': {
                        'type': 'string',
                        'description': '???',
                        'example': 'fg01-evt-global'
                    },
                    'msg_type': {
                        'type': 'string',
                        'description': 'The type of message',
                        'example': 'job-created'
                    },
                    'account_id': {
                        'type': 'string',
                        'description': 'The account id related to the job',
                        'example': '848c0271-d307-426b-9291-6d99f17039a3'
                    },
                    'task_id': {
                        'type': 'string',
                        'description': 'The task id'
                    },
                    'created_by': {
                        'type': 'string',
                        'description': 'Task created by',
                        'example': 'system'
                    },
                    'job_id': {
                        'type': 'string',
                        'description': 'The job id',
                        'example': 'db36cc07-6f28-421a-afd4-88288b625fee'
                    },
                    'name': {
                        'type': 'string',
                        'description': 'The name of the job',
                        'example': 'job-name'
                    },
                    'process_status': {
                        'type': 'object',
                        'required': [],
                        'properties': {
                            'status': {
                                'type': 'integer',
                                'format': 'int64',
                                'description': 'The current job status id',
                                'example': 1
                            },
                            'display': {
                                'type': 'string',
                                'description': 'The current job status text',
                                'example': 'Queued'
                            }
                        },
                        '$$ref': '#/definitions/ProcessStatusDoc'
                    }
                },
                '$$ref': '#/definitions/NewJobDoc'
            }
        },
        '409': {
            'description': 'API Key Already Exists'
        }
    },
    'security': [
        {
            'slyce-account-id': []
        }
    ],
    '__originalOperationId': 'API Keys.create_api_key',
    'url': '/accounts/{account_id}/api-keys/',
    'method': 'post'
};
var WS_SPEC_MOCK = {
    socketEndpoints: [
        {
            operationId: 'test',
            summary: 'test endpoint summary',
            url: '/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}',
            protocol: ['ws', 'wss'],
            name: 'message',
            parameters: [
                {
                    type: 'object',
                    in: 'body',
                    required: true,
                    name: 'Request Type 1',
                    schema: {
                        name: 'message',
                        required: ['msg_type', 'workflow_options', 'demo_mode', 'image_bytes'],
                        properties: {
                            msg_type: {
                                type: 'string',
                                description: 'test descr',
                                required: true,
                                example: 'execute_workflow'
                            },
                            workflow_options: {
                                type: 'string',
                                description: 'test descr',
                                required: true,
                                example: true
                            },
                            demo_mode: {
                                type: 'boolean',
                                description: 'test descr',
                                required: true,
                                example: true,
                            },
                            image_bytes: {
                                type: 'string',
                                format: 'byte',
                                description: 'test descr',
                                required: true,
                                example: 'test'
                            }
                        }
                    }
                },
                {
                    type: 'object',
                    name: 'Request Type 2',
                    required: true,
                    in: 'body',
                    schema: {
                        name: 'message',
                        required: ['msg_type', 'workflow_options', 'demo_mode', 'image_bytes'],
                        properties: {
                            msg_type: {
                                type: 'string',
                                description: 'test descr',
                                required: true,
                                example: 'execute_workflow'
                            },
                            workflow_options: {
                                type: 'string',
                                description: 'test descr',
                                required: true,
                                example: true
                            },
                            demo_mode: {
                                type: 'boolean',
                                description: 'test descr',
                                required: true,
                                example: true,
                            },
                            image_url: {
                                type: 'string',
                                format: 'byte',
                                description: 'test descr',
                                required: true,
                                example: 'test stuff'
                            }
                        }
                    }
                },
                {
                    in: 'path',
                    name: 'account_id',
                    type: 'string',
                    default: 'slyce_id',
                    required: true,
                },
                {
                    in: 'path',
                    name: 'space_id',
                    type: 'string',
                    default: '8cf3c527-6bfa-46a9-8457-014ed1b05858',
                    required: true,
                },
                {
                    in: 'path',
                    name: 'workflow_id',
                    type: 'string',
                    default: '441af309-ea03-474f-8946-42da6c89a1a9',
                    required: true,
                },
                {
                    in: 'query',
                    name: 'slyce-account-id',
                    required: true,
                    type: 'string',
                    example: 'slyce_id',
                },
                {
                    in: 'query',
                    name: 'slyce-api-key',
                    required: true,
                    type: 'string',
                    example: 'slyce_api_key',
                }
            ],
            description: 'test endpoint description',
            consumes: [
                'application/json'
            ],
            produces: [
                'application/json'
            ],
            tags: [
                'Accounts',
                'API Keys',
                'test'
            ],
            requestMessages: [
                {
                    required: true,
                    type: 'object',
                    description: 'message to send 1',
                    schema: {
                        type: 'object',
                        properties: {
                            msg_type: {
                                type: 'string',
                                example: 'pass'
                            },
                            workflow_options: {
                                type: 'object',
                                properties: {
                                    key: {
                                        type: 'string',
                                        required: true,
                                        example: 'some option'
                                    }
                                }
                            },
                            demo_mode: {
                                type: 'string'
                            },
                            image_url: {
                                type: 'string'
                            }
                        }
                    }
                },
                {
                    required: true,
                    type: 'object',
                    description: 'message to send 2',
                    schema: {
                        type: 'object',
                        properties: {
                            msg_type: {
                                type: 'string'
                            },
                            workflow_options: {
                                type: 'object',
                                properties: {
                                    key: {
                                        type: 'string',
                                        required: true
                                    }
                                }
                            },
                            demo_mode: {
                                type: 'string'
                            },
                            image_bytes: {
                                type: 'string',
                                format: 'byte'
                            }
                        }
                    }
                }
            ],
            responseMessages: [
                {
                    description: 'response message 1',
                    schema: {
                        type: 'object',
                        properties: {
                            msg_type: {
                                type: 'string'
                            },
                            workflow_options: {
                                type: 'object',
                                properties: {
                                    key: {
                                        type: 'string'
                                    }
                                }
                            },
                            demo_mode: {
                                type: 'string'
                            },
                            image_url: {
                                type: 'string'
                            }
                        }
                    }
                },
                {
                    description: 'response message 2',
                    schema: {
                        type: 'object',
                        properties: {
                            msg_type: {
                                type: 'string'
                            },
                            workflow_options: {
                                type: 'object',
                                properties: {
                                    key: {
                                        type: 'string',
                                        example: 'shit'
                                    }
                                }
                            },
                            demo_mode: {
                                type: 'string'
                            },
                            image_url: {
                                type: 'string'
                            }
                        }
                    }
                }
            ],
            errorMessages: [
                {
                    description: 'error message',
                    schema: {
                        type: 'object',
                        properties: {
                            errors: {
                                type: 'array',
                                items: {
                                    type: 'any'
                                }
                            }
                        }
                    }
                }
            ]
        }
    ],
    baseURL: 'ws://localhost:8001'
};
var WSENDPOINT = {
    'operationId': 'test',
    'summary': 'test endpoint summary',
    'url': '/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}',
    'protocol': [
        'ws',
        'wss'
    ],
    'name': 'message',
    'parameters': [
        {
            'type': 'object',
            'in': 'body',
            'required': true,
            'name': 'Request Type 1',
            'schema': {
                'name': 'message',
                'required': [
                    'msg_type',
                    'workflow_options',
                    'demo_mode',
                    'image_bytes'
                ],
                'properties': {
                    'msg_type': {
                        'type': 'string',
                        'description': 'test descr',
                        'required': true,
                        'example': 'execute_workflow'
                    },
                    'workflow_options': {
                        'type': 'string',
                        'description': 'test descr',
                        'required': true,
                        'example': true
                    },
                    'demo_mode': {
                        'type': 'boolean',
                        'description': 'test descr',
                        'required': true,
                        'example': true
                    },
                    'image_bytes': {
                        'type': 'string',
                        'format': 'byte',
                        'description': 'test descr',
                        'required': true,
                        'example': 'test'
                    }
                }
            }
        },
        {
            'type': 'object',
            'name': 'Request Type 2',
            'required': true,
            'in': 'body',
            'schema': {
                'name': 'message',
                'required': [
                    'msg_type',
                    'workflow_options',
                    'demo_mode',
                    'image_bytes'
                ],
                'properties': {
                    'msg_type': {
                        'type': 'string',
                        'description': 'test descr',
                        'required': true,
                        'example': 'execute_workflow'
                    },
                    'workflow_options': {
                        'type': 'string',
                        'description': 'test descr',
                        'required': true,
                        'example': true
                    },
                    'demo_mode': {
                        'type': 'boolean',
                        'description': 'test descr',
                        'required': true,
                        'example': true
                    },
                    'image_url': {
                        'type': 'string',
                        'description': 'test descr',
                        'required': true,
                        'example': 'test'
                    }
                }
            }
        },
        {
            'in': 'path',
            'name': 'account_id',
            'type': 'string',
            'default': 'slyce_id',
            'required': true,
            'value': 'slyce_id'
        },
        {
            'in': 'path',
            'name': 'space_id',
            'type': 'string',
            'default': '8cf3c527-6bfa-46a9-8457-014ed1b05858',
            'required': true,
            'value': '8cf3c527-6bfa-46a9-8457-014ed1b05858'
        },
        {
            'in': 'path',
            'name': 'workflow_id',
            'type': 'string',
            'default': '441af309-ea03-474f-8946-42da6c89a1a9',
            'required': true,
            'value': '441af309-ea03-474f-8946-42da6c89a1a9'
        },
        {
            'in': 'query',
            'name': 'slyce-account-id',
            'required': true,
            'type': 'string',
            'example': 'slyce_id',
            'value': 'slyce_id'
        },
        {
            'in': 'query',
            'name': 'slyce-api-key',
            'required': true,
            'type': 'string',
            'example': 'slyce_api_key',
            'value': 'slyce_api_key'
        }
    ],
    'description': 'test endpoint description',
    'consumes': [
        'application/json'
    ],
    'produces': [
        'application/json'
    ],
    'tags': [
        'Accounts',
        'API Keys',
        'test'
    ],
    'requestMessages': [
        {
            'description': 'message to send 1',
            'schema': {
                'type': 'object',
                'properties': {
                    'msg_type': {
                        'type': 'string',
                        'example': 'error'
                    },
                    'workflow_options': {
                        'type': 'object',
                        'properties': {
                            'key': {
                                'type': 'string',
                                'required': true,
                                'example': 'someKey'
                            }
                        }
                    },
                    'demo_mode': {
                        'type': 'string',
                        'example': 'true'
                    },
                    'image_url': {
                        'type': 'string',
                        'example': 'true'
                    }
                }
            }
        },
        {
            'description': 'message to send 2',
            'schema': {
                'type': 'object',
                'properties': {
                    'msg_type': {
                        'type': 'string',
                        'example': 'someExample'
                    },
                    'workflow_options': {
                        'type': 'object',
                        'properties': {
                            'key': {
                                'type': 'string',
                                'required': true,
                                'example': 'someexample'
                            }
                        }
                    },
                    'demo_mode': {
                        'type': 'string',
                        'example': 'someexample'
                    },
                    'image_bytes': {
                        'type': 'string',
                        'format': 'byte',
                        'example': 'someExample'
                    }
                }
            }
        }
    ],
    'responseMessages': [
        {
            'description': 'response message 1',
            'schema': {
                'type': 'object',
                'properties': {
                    'msg_type': {
                        'type': 'string'
                    },
                    'workflow_options': {
                        'type': 'object',
                        'properties': {
                            'key': {
                                'type': 'string'
                            }
                        }
                    },
                    'demo_mode': {
                        'type': 'string'
                    },
                    'image_url': {
                        'type': 'string'
                    }
                }
            }
        }
    ],
    'errorMessages': [
        {
            'description': 'error message',
            'schema': {
                'type': 'object',
                'properties': {
                    'errors': {
                        'type': 'array',
                        'items': {
                            'type': 'any'
                        }
                    }
                }
            }
        }
    ]
};


/***/ }),

/***/ "./src/app/models/auth/security-definition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityDefinition; });
/* unused harmony export SecurityEntity */
var SecurityDefinition = /** @class */ (function () {
    function SecurityDefinition() {
    }
    SecurityDefinition.MOCK_DATA = {
        'test1': {
            type: 'apiKey',
            name: 'test1',
            in: 'header'
        },
        'test2': {
            type: 'apiKey',
            name: 'test2',
            in: 'header'
        }
    };
    return SecurityDefinition;
}());

var SecurityEntity = /** @class */ (function () {
    function SecurityEntity() {
    }
    return SecurityEntity;
}());



/***/ }),

/***/ "./src/app/models/contact.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
/* unused harmony export ContactInfo */
var ContactModel = /** @class */ (function () {
    function ContactModel() {
    }
    ContactModel.MOCK_DATA = {
        contact: {
            email: 'khoi.tran@slyce.it'
        },
        version: '1.0',
        title: 'Sylce API'
    };
    return ContactModel;
}());

var ContactInfo = /** @class */ (function () {
    function ContactInfo() {
    }
    return ContactInfo;
}());



/***/ }),

/***/ "./src/app/models/endpoint/clicked-test-res.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppClickedTestRes; });
var AppClickedTestRes = /** @class */ (function () {
    function AppClickedTestRes(endPointData, selectedResponse, parameterFields) {
        this.selectedResponse = selectedResponse;
        this.parameterFields = parameterFields;
        this.endPointData = endPointData;
    }
    AppClickedTestRes.MOCK_DATA = {
        selectedResponse: 'application/JSON',
        parameterFields: {
            name: 'page_number',
            httpPart: 'query',
            type: 'integer',
            required: true,
            desc: 'The page number to get',
            value: '20'
        }
    };
    return AppClickedTestRes;
}());



/***/ }),

/***/ "./src/app/models/endpoint/endpoint.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEndPoint; });
/* unused harmony export Parameter */
/* unused harmony export SecurityRequirement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Schema; });
/* unused harmony export Properties */
/* unused harmony export Responses */
/* unused harmony export Response */
/* unused harmony export Property */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RequestInitiator; });
/* unused harmony export RequestEntry */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Endpoint = /** @class */ (function () {
    function Endpoint() {
    }
    return Endpoint;
}());

var AppEndPoint = /** @class */ (function (_super) {
    __extends(AppEndPoint, _super);
    function AppEndPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AppEndPoint;
}(Endpoint));

var Parameter = /** @class */ (function () {
    function Parameter() {
    }
    return Parameter;
}());

var SecurityRequirement = /** @class */ (function () {
    function SecurityRequirement() {
    }
    return SecurityRequirement;
}());

var Schema = /** @class */ (function () {
    function Schema() {
    }
    return Schema;
}());

var Properties = /** @class */ (function () {
    function Properties() {
    }
    return Properties;
}());

var Responses = /** @class */ (function () {
    function Responses() {
    }
    return Responses;
}());

var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());

var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());

var RequestInitiator = /** @class */ (function () {
    function RequestInitiator(request, localDataService) {
        var _this = this;
        this.headers = {};
        // console.log(request);
        this.method = request.endPointData.method;
        this.url = request.endPointData.url;
        if (request.endPointData.security) {
            request.endPointData.security.forEach(function (item) {
                if (item) {
                    Object.keys(item).forEach(function (secRequirement) {
                        _this.addHeader(secRequirement, localDataService.getStorageVar(secRequirement));
                    });
                }
            });
        }
        if (request.selectedResponse) {
            this.setContentType(request.selectedResponse);
        }
        if (request.parameterFields) {
            Object.keys(request.parameterFields).forEach(function (entry) {
                if (!_this[request.parameterFields[entry].in]) {
                    _this[request.parameterFields[entry].in] = {};
                }
                if (entry.toLowerCase() === 'body') {
                    _this[request.parameterFields[entry].in] = request.parameterFields[entry].value;
                }
                else {
                    _this[request.parameterFields[entry].in][entry] = request.parameterFields[entry].value;
                }
            });
        }
    }
    RequestInitiator.prototype.setContentType = function (contentType) {
        this.headers['Content-Type'] = contentType;
    };
    RequestInitiator.prototype.addHeader = function (headerKey, headerValue) {
        this.headers[headerKey] = headerValue;
    };
    return RequestInitiator;
}());

var RequestEntry = /** @class */ (function () {
    function RequestEntry() {
    }
    return RequestEntry;
}());



/***/ }),

/***/ "./src/app/models/socketObservables/socketObservables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketObservables; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");

var SocketObservables = /** @class */ (function () {
    function SocketObservables(socket) {
        var _this = this;
        this.onopen = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.onclose = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.onmessage = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.onerror = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.socket = socket;
        this.socket.onopen = function (evt) {
            _this.onopen.next(evt);
        };
        this.socket.onmessage = function (evt) {
            _this.onmessage.next(evt);
        };
        this.socket.onerror = function (evt) {
            _this.onerror.next(evt);
        };
        this.socket.onclose = function (evt) {
            _this.onclose.next(evt);
        };
    }
    return SocketObservables;
}());



/***/ }),

/***/ "./src/app/pipes/get-index.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetIndexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetIndexPipe = /** @class */ (function () {
    function GetIndexPipe() {
    }
    /**
     * Takes an array and returns the index of the array if it exists,
     * otherwise return an empty array
     * If the index field is not provided, return the original array
     * @param {Array} array
     * @param index
     * @returns {Array} with single entry of the index
     */
    GetIndexPipe.prototype.transform = function (array, index) {
        if (index == null || index === undefined) {
            return (array);
        }
        if (index >= 0 && index < array.length) {
            return ([array[index]]);
        }
        else {
            return [];
        }
    };
    GetIndexPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'getIndex'
        })
    ], GetIndexPipe);
    return GetIndexPipe;
}());



/***/ }),

/***/ "./src/app/services/config-service/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.config = {};
    }
    ConfigService_1 = ConfigService;
    ConfigService.prototype.initConfigService = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(ConfigService_1.CONFIG_LOCATION, {
                'headers': new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */](ConfigService_1.NO_CACHE_HEADER)
            }).subscribe(function (res) {
                _this.config = res;
                resolve(_this.config);
            }, function (error) {
                reject(error);
            });
        });
    };
    ConfigService.CONFIG_LOCATION = 'assets/config.json';
    ConfigService.NO_CACHE_HEADER = {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    };
    ConfigService = ConfigService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
    var ConfigService_1;
}());



/***/ }),

/***/ "./src/app/services/endpoints-shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointsSharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EndpointsSharedService = /** @class */ (function () {
    function EndpointsSharedService() {
        this.isExamplesHidden = false;
    }
    EndpointsSharedService.prototype.endpointsExamplesToggle = function () {
        this.isExamplesHidden = !this.isExamplesHidden;
    };
    EndpointsSharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EndpointsSharedService);
    return EndpointsSharedService;
}());



/***/ }),

/***/ "./src/app/services/image-bytes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageBytesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageBytesService = /** @class */ (function () {
    function ImageBytesService(zone) {
        this.zone = zone;
        this.readerSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ImageBytesService.prototype.getImageBytes = function (imageInput) {
        var reader = new FileReader();
        var self = this;
        var file = imageInput.files[0];
        this.zone.runOutsideAngular(function () {
            reader.addEventListener('load', function () {
                var imageBytes = self.fetchByteData(reader.result);
                self.readerSubject.next(imageBytes);
            }, false);
        });
        if (file) {
            reader.readAsDataURL(file);
        }
        return this.readerSubject.asObservable();
    };
    ImageBytesService.prototype.fetchByteData = function (string) {
        var regex = new RegExp(/,(.*)/g);
        var imageBytes = string.match(regex)[0];
        if (imageBytes.charAt(0) === ',') {
            imageBytes = imageBytes.substring(1);
        }
        return imageBytes;
    };
    ImageBytesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ImageBytesService);
    return ImageBytesService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(swaggerService) {
        var _this = this;
        this.swaggerService = swaggerService;
        this.tempSecurityDefinitions = {};
        this.storedSecurityDefinitionsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](undefined);
        this.storedSecurityDefinitions = this.storedSecurityDefinitionsSubject.asObservable();
        // get securityDefinitions from swagger spec file
        this.getSecurityDefinitions();
        // get storedSecurityDefinitions from localStorage if exist
        this.securityDefinitions
            .subscribe(function (data) {
            if (data) {
                _this.getSecurityDefinitionsValuesFromStorage(data);
            }
        });
    }
    LocalStorageService.prototype.getSecurityDefinitionsValuesFromStorage = function (securityDefinitionObj) {
        var securityDefinitionsDict = {};
        for (var securityDefinition in securityDefinitionObj) {
            if (securityDefinitionObj.hasOwnProperty(securityDefinition)) {
                var securityDefinitionVal = this.getStorageVar(securityDefinition);
                if (securityDefinitionVal) {
                    securityDefinitionsDict[securityDefinition] = securityDefinitionVal;
                }
            }
        }
        this.tempSecurityDefinitions = securityDefinitionsDict;
        this.storedSecurityDefinitionsSubject.next(securityDefinitionsDict);
    };
    LocalStorageService.prototype.getSecurityDefinitions = function () {
        this.securityDefinitions = this.swaggerService.getApiData()
            .map(function (data) {
            if (data) {
                return data.spec.securityDefinitions;
            }
        });
    };
    LocalStorageService.prototype.setStorageVar = function (varName, varValue) {
        window.localStorage.setItem(varName, varValue);
        this.tempSecurityDefinitions[varName] = varValue;
        this.storedSecurityDefinitionsSubject.next(this.tempSecurityDefinitions);
    };
    LocalStorageService.prototype.getStorageVar = function (varName) {
        return window.localStorage.getItem(varName);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__swagger_service__["a" /* SwaggerService */]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/shared-vars.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedVarsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedVarsService = /** @class */ (function () {
    function SharedVarsService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    SharedVarsService.prototype.ngOnInit = function () {
    };
    SharedVarsService.prototype.initSharedVars = function (endpoints) {
        var _this = this;
        var res = {};
        endpoints.forEach(function (endpoint) {
            if (endpoint.parameters && endpoint.parameters.length) {
                endpoint.parameters.forEach(function (param) {
                    if (!param.default && param.in !== 'body' && !res[param.name]) {
                        res[param.name] = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
                        var localStorageVal = _this.localStorageService.getStorageVar(param.name);
                        if (localStorageVal) {
                            res[param.name].next(localStorageVal);
                        }
                    }
                });
            }
        });
        this.sharedVars = res;
    };
    SharedVarsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__local_storage_service__["a" /* LocalStorageService */]])
    ], SharedVarsService);
    return SharedVarsService;
}());



/***/ }),

/***/ "./src/app/services/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_socketObservables_socketObservables__ = __webpack_require__("./src/app/models/socketObservables/socketObservables.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.connect = function (url) {
        var webSocket = new WebSocket(url);
        var socketObservables = new __WEBPACK_IMPORTED_MODULE_1__models_socketObservables_socketObservables__["a" /* SocketObservables */](webSocket);
        return (socketObservables);
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/swagger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwaggerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Swagger = __webpack_require__("./node_modules/swagger-client/dist/index.js");




var SwaggerService = /** @class */ (function () {
    function SwaggerService(http, notify) {
        this.http = http;
        this.notify = notify;
        this.specHost = '';
        this.endpoints = [];
        this.apiDataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.endpointsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.wsEndpointsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    SwaggerService_1 = SwaggerService;
    SwaggerService.applyEndpointAccesses = function (apiData, endpointAccesses) {
        if (!endpointAccesses) {
            return apiData;
        }
        var newApiData = JSON.parse(JSON.stringify(apiData));
        if (newApiData && newApiData.spec && newApiData.spec.paths) {
            var paths_1 = newApiData.spec.paths;
            Object.keys(paths_1).forEach(function (pathName) {
                var path = paths_1[pathName];
                if (path) {
                    Object.keys(path).forEach(function (methodName) {
                        if (endpointAccesses[pathName] && endpointAccesses[pathName][methodName] &&
                            (!endpointAccesses[pathName][methodName].isAvailable)) {
                            delete path[methodName];
                        }
                    });
                }
            });
        }
        return newApiData;
    };
    SwaggerService.prototype.testEndpoint = function (callData) {
        var options = this.buildEndpointOptions(callData);
        if (callData.body && (callData.method === 'put' || 'patch' || 'post')) {
            return this.http[callData.method](this.specHost + this.substitutePath(callData.url, callData.path), callData.body, options);
        }
        else {
            return this.http[callData.method](this.specHost + this.substitutePath(callData.url, callData.path), options);
        }
    };
    SwaggerService.prototype.buildEndpointOptions = function (callData) {
        var options = { observe: 'response' };
        if (callData.headers) {
            options['headers'] = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            for (var headerName in callData.headers) {
                if (callData.headers.hasOwnProperty(headerName)) {
                    var headerValue = callData.headers[headerName];
                    if (headerValue) {
                        options['headers'] = options['headers'].append(headerName, headerValue);
                    }
                }
            }
        }
        if (callData.query) {
            options['params'] = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpParams */]();
            for (var queryName in callData.query) {
                if (callData.query.hasOwnProperty(queryName)) {
                    var queryValue = callData.query[queryName];
                    if (queryValue) {
                        options['params'] = options['params'].append(queryName, queryValue);
                    }
                }
            }
        }
        return options;
    };
    SwaggerService.prototype.substitutePath = function (path, pathObject) {
        if (pathObject) {
            Object.keys(pathObject).forEach(function (key) {
                if (pathObject[key]) {
                    path = path.replace('{' + key + '}', pathObject[key]);
                }
            });
        }
        return (path);
    };
    SwaggerService.prototype.setApiData = function (apiData) {
        this.apiDataSubject.next(apiData);
    };
    SwaggerService.prototype.setSortedEndpoints = function (sortedEndpoints) {
        this.endpointsSubject.next(sortedEndpoints);
    };
    SwaggerService.prototype.getEndpointsSortedByTags = function () {
        return this.endpointsSubject.asObservable();
    };
    SwaggerService.prototype.getApiData = function () {
        return this.apiDataSubject.asObservable();
    };
    SwaggerService.prototype.setSpecUrl = function (url) {
        this.initSwagger(url);
    };
    SwaggerService.prototype.sortApiEndpointsByTags = function (endpoints) {
        var result = [];
        var _loop_1 = function (pathKey) {
            if (endpoints.hasOwnProperty(pathKey)) {
                var path = endpoints[pathKey];
                var _loop_2 = function (methodKey) {
                    if (path.hasOwnProperty(methodKey)) {
                        var method_1 = path[methodKey];
                        this_1.endpoints.push(method_1);
                        if (method_1.tags) {
                            method_1.tags.filter(function (tag) {
                                if (!result[tag]) {
                                    result[tag] = [];
                                }
                                method_1.url = pathKey;
                                method_1.method = methodKey;
                                result[tag].push(method_1);
                            });
                        }
                        else {
                            if (!result[SwaggerService_1.NO_TAG_LABEL]) {
                                result[SwaggerService_1.NO_TAG_LABEL] = [];
                            }
                            method_1.url = pathKey;
                            method_1.method = methodKey;
                            result[SwaggerService_1.NO_TAG_LABEL].push(method_1);
                        }
                    }
                };
                for (var methodKey in path) {
                    _loop_2(methodKey);
                }
            }
        };
        var this_1 = this;
        for (var pathKey in endpoints) {
            _loop_1(pathKey);
        }
        return result;
    };
    SwaggerService.prototype.setHostUrl = function (apiData) {
        if (apiData) {
            var protocol = void 0;
            var host = void 0;
            var basePath = void 0;
            if (apiData.spec && apiData.spec.schemes) {
                protocol = (apiData.spec.schemes.indexOf('https') !== -1 ? 'https' : apiData.spec.schemes[0] || 'http') + '://';
            }
            else {
                protocol = window.location.protocol + '//';
            }
            if (apiData.spec && apiData.spec.host) {
                host = apiData.spec.host;
            }
            else {
                try {
                    var matches = apiData.url.match('(https*://)*([^/]*)');
                    host = matches[matches.length - 1];
                }
                catch (e) {
                    host = window.location.host;
                }
            }
            basePath = apiData.spec && apiData.spec.basePath ? apiData.spec.basePath : '';
            this.specHost = protocol + host + basePath;
        }
    };
    SwaggerService.prototype.initSwagger = function (specUrl, websocketSpecUrl) {
        var _this = this;
        return Swagger(specUrl)
            .then(function (apiData) {
            apiData = SwaggerService_1.applyEndpointAccesses(apiData, null);
            _this.setHostUrl(apiData);
            _this.setApiData(apiData);
            if (websocketSpecUrl) {
                return _this.initWsSpec(websocketSpecUrl).then(function (res) {
                    var sortedRestEndpoints = _this.sortApiEndpointsByTags(apiData.spec.paths);
                    var sortedCombinedEndpoints = _this.appendWsEndpointToTags(sortedRestEndpoints, res);
                    // this.sharedVarsService.initSharedVars(this.endpoints);
                    _this.setSortedEndpoints(sortedCombinedEndpoints);
                    return _this.endpoints;
                }, function (error) {
                    _this.notify.error('Error', 'Swangler socket spec JSON was not loaded');
                    _this.setSortedEndpoints(_this.sortApiEndpointsByTags(apiData.spec.paths));
                });
            }
            else {
                _this.setSortedEndpoints(_this.sortApiEndpointsByTags(apiData.spec.paths));
            }
        })
            .catch(function (err) {
            console.error(err);
            _this.notify.error('Error', 'Swagger spec JSON was not loaded');
        });
    };
    SwaggerService.prototype.appendWsEndpointToTags = function (restEndpoints, wsEndpoints) {
        var _this = this;
        if (wsEndpoints && wsEndpoints.socketEndpoints) {
            wsEndpoints.socketEndpoints.forEach(function (endpoint) {
                _this.endpoints.push(endpoint);
                if (endpoint && endpoint.tags && endpoint.tags.length > 0) {
                    endpoint.tags.forEach(function (tag) {
                        if (!restEndpoints[tag]) {
                            restEndpoints[tag] = [];
                        }
                        restEndpoints[tag].push(endpoint);
                    });
                }
                else if (endpoint) {
                    if (!restEndpoints[SwaggerService_1.NO_TAG_LABEL]) {
                        restEndpoints[SwaggerService_1.NO_TAG_LABEL] = [];
                    }
                    restEndpoints[SwaggerService_1.NO_TAG_LABEL].push(endpoint);
                }
            });
        }
        return restEndpoints;
    };
    SwaggerService.prototype.initWsSpec = function (websocketSpecUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(websocketSpecUrl).subscribe(function (res) {
                _this.setWsEndpoints(res);
                resolve(res);
            }, function (error) {
                reject(error);
            });
        });
    };
    SwaggerService.prototype.setWsEndpoints = function (wsEndpointsData) {
        this.wsEndpointsSubject.next(wsEndpointsData);
    };
    SwaggerService.prototype.getWsEndpoints = function () {
        return this.wsEndpointsSubject.asObservable();
    };
    SwaggerService.NO_TAG_LABEL = 'NO_TAG';
    SwaggerService = SwaggerService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], SwaggerService);
    return SwaggerService;
    var SwaggerService_1;
}());



/***/ }),

/***/ "./src/app/views/endpoints-view/endpoints-view.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container-fluid\">\n  <div id=\"swagger-ui-container\" class=\"row\">\n\n    <div id=\"swagger_sidebar\" class=\"col-lg-3 col-xl-2 sps sps--blw\">\n\n      <div id=\"auth_main_container\" class=\"collapse \">\n        <div class=\"row\">\n          <div class=\"col-12\">\n\n            <app-auth-component [securityDefinitions]='apiData?.spec.securityDefinitions'></app-auth-component>\n\n          </div>\n        </div>\n      </div>\n\n      <div id=\"sticky_nav_wrapper\" class=\"sticky-top collapse mb-3\">\n        <div id=\"sticky_nav\" class=\"pt-2 pb-2\">\n          <div class=\"row\" data-navigator=\"\">\n\n            <app-sidebar-nav [tags]='sortedApiData | async' [sectionToExpand]='endpointTag'></app-sidebar-nav>\n\n          </div>\n        </div>\n\n        <app-contact class=\"card d-block\" [contactData]='apiData?.spec.info'></app-contact>\n      </div>\n\n\n    </div>\n\n    <div id=\"resources_container\" class=\"col-lg-9 col-xl-10\">\n      <div id=\"resources\" class=\"\">\n        <div id=\"resource_Accounts\" class=\"resource\">\n          <h5 *ngIf=\"this.wrongTag\" class=\"no-endpoint-data\">No data for {{this.endpointTag}}</h5>\n          <div *ngIf=\"!this.wrongTag\" class=\"endpoints\" id=\"Accounts_endpoint_list\">\n            <div *ngFor=\"let endpoint of endpoints\">\n              <app-endpoint *ngIf=\"endpoint.responses\" (clickedTestEndPoint)=\"this.clickTest($event, modal)\" [endpointData]=\"endpoint\"\n                [scrollToId]='scrollToId'></app-endpoint>\n              <app-socket-endpoint *ngIf=\"endpoint.responseMessages\" (clickedSeeSocketMessages)=\"this.showSocketMessages($event, modal)\"\n                [endpointData]=\"endpoint\" [scrollToId]='scrollToId'></app-socket-endpoint>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class=\"modal fade\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-xlg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title text-center\">{{this['result'].header}}\n            <span class=\"http_method badge badge-primary\">{{this['result'].method}}</span>\n          </h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <svg class=\"svg-inline--fa fa-times fa-w-12\" aria-hidden=\"true\" data-fa-processed=\"\" data-prefix=\"fal\" data-icon=\"times\"\n              role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 384 512\">\n              <path fill=\"currentColor\" d=\"M217.5 256l137.2-137.2c4.7-4.7 4.7-12.3 0-17l-8.5-8.5c-4.7-4.7-12.3-4.7-17 0L192 230.5 54.8 93.4c-4.7-4.7-12.3-4.7-17 0l-8.5 8.5c-4.7 4.7-4.7 12.3 0 17L166.5 256 29.4 393.2c-4.7 4.7-4.7 12.3 0 17l8.5 8.5c4.7 4.7 12.3 4.7 17 0L192 281.5l137.2 137.2c4.7 4.7 12.3 4.7 17 0l8.5-8.5c4.7-4.7 4.7-12.3 0-17L217.5 256z\"></path>\n            </svg>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"response\" *ngIf=\"!this['result'].websocket\">\n            <small class=\"text-uppercase\">Request URL</small>\n            <div class=\"mt-2 mb-3 request_url\">\n              <div class=\"hljs rounded\">{{this['result'].url}}</div>\n            </div>\n\n            <small class=\"text-uppercase\">Response Body</small>\n            <div class=\"mt-2 mb-3 response_body rounded\">\n              <!-- <pre class=\"json\"><code [innerHTML]=\"this['result'].responseBody\" class=\"rounded hljs\"></code></pre> -->\n              <pre class=\"json\">\n                <code class=\"rounded hljs\" appJsonFormat [json]=\"this['result'].responseBodyJson\"></code>\n              </pre>\n            </div>\n\n\n            <small class=\"text-uppercase\">Response Code</small>\n            <div class=\"mt-2 mb-3 response_code\">\n              <pre><code class=\"hljs rounded\" [innerHTML]=\"this['result'].responseCode\"></code></pre>\n            </div>\n\n            <small class=\"text-uppercase\">Response Headers</small>\n            <div class=\"mt-2 response_headers\">\n              <pre clas=\"json\"><code class=\"hljs rounded json\" [innerHTML]=\"this['result'].responseHeader\"></code></pre>\n            </div>\n          </div>\n\n          <div class=\"response\" *ngIf=\"this['result'].websocket\">\n            <small class=\"text-uppercase\">Request URL</small>\n            <div class=\"mt-2 mb-3 request_url\">\n              <div class=\"hljs rounded\">{{this['result'].url}}</div>\n            </div>\n\n\n            <small class=\"text-uppercase\">Messages</small>\n            <tabset>\n              <tab class=\"response_body\" [heading]=\"message.msg_type\" *ngFor=\"let message of this['result'].messages\">\n                <pre class=\"json\">\n                    <!-- <code [innerHTML]=\"message.response\" class=\"rounded hljs\"></code> -->\n                    <code class=\"rounded hljs\" appJsonFormat [json]=\"message.response\"></code>\n                  </pre>\n              </tab>\n            </tabset>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/views/endpoints-view/endpoints-view.component.scss":
/***/ (function(module, exports) {

module.exports = ".request_url {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n\n.response code {\n  max-height: 300px; }\n\n.no-endpoint-data {\n  padding: 1rem; }\n\n.response_body {\n  background-color: #3f474e; }\n\ntab pre {\n  font-size: 0; }\n\ntab pre code {\n    font-size: 1rem; }\n\n.modal-dialog .response_body pre {\n  font-size: 0; }\n\n.modal-dialog .hljs {\n  font-size: 0.87rem; }\n\n.modal-dialog code {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n"

/***/ }),

/***/ "./src/app/views/endpoints-view/endpoints-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndpointsViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_endpoint_endpoint_model__ = __webpack_require__("./src/app/models/endpoint/endpoint.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__ = __webpack_require__("./src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_highlight_js___ = __webpack_require__("./node_modules/highlight.js/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_highlight_js____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_highlight_js___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_config_service_config_service__ = __webpack_require__("./src/app/services/config-service/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shared_vars_service__ = __webpack_require__("./src/app/services/shared-vars.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EndpointsViewComponent = /** @class */ (function () {
    function EndpointsViewComponent(route, swaggerService, localDataService, notify, configService, sharedVarsService) {
        this.route = route;
        this.swaggerService = swaggerService;
        this.localDataService = localDataService;
        this.notify = notify;
        this.configService = configService;
        this.sharedVarsService = sharedVarsService;
        this.wrongTag = false;
        this.scrollToId = null;
        this.sortedApiData = this.swaggerService.getEndpointsSortedByTags();
        this.result = {};
    }
    EndpointsViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configService.initConfigService().then(function (config) {
            _this.swaggerService.initSwagger(config.spec, config.websocket_spec)
                .then(function (endpoints) {
                if (endpoints) {
                    _this.sharedVarsService.initSharedVars(endpoints);
                }
            });
        }, function (error) {
            _this.notify.error(error);
        });
        this.queryParamSubscription = this.route.queryParams.subscribe(function (queryParams) {
            if (queryParams.enpt) {
                _this.scrollToId = queryParams.enpt;
            }
        });
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.endpointTag = params['endpointTag'];
            _this.updateEndpoints();
        });
        this.swaggerService.getApiData().subscribe(function (data) {
            _this.apiData = data;
        });
    };
    EndpointsViewComponent.prototype.updateEndpoints = function () {
        var _this = this;
        this.swaggerService.getEndpointsSortedByTags().subscribe(function (data) {
            if (data) {
                if (_this.endpointTag) {
                    if (data[_this.endpointTag]) {
                        _this.endpoints = data[_this.endpointTag];
                        _this.wrongTag = false;
                    }
                    else {
                        _this.wrongTag = true;
                        _this.notify.error('Error', 'No data for ' + _this.endpointTag);
                    }
                }
                else {
                    _this.endpoints = data[Object.keys(data)[0]];
                }
            }
        });
    };
    EndpointsViewComponent.prototype.ngOnDestroy = function () {
        this.queryParamSubscription.unsubscribe();
        this.paramSubscription.unsubscribe();
    };
    EndpointsViewComponent.prototype.clickTest = function (request, modal) {
        var _this = this;
        this.result['websocket'] = false;
        var requestInitiator = new __WEBPACK_IMPORTED_MODULE_3__models_endpoint_endpoint_model__["c" /* RequestInitiator */](request, this.localDataService);
        this.swaggerService.testEndpoint(requestInitiator).subscribe(function (res) {
            _this.setRes(res, request);
            modal.show();
        }, function (error) {
            _this.setRes(error, request);
            _this.result['responseBody'] = _this.highlightJSInJson(error.error);
            _this.result['responseBodyJson'] = error.error;
            modal.show();
        });
    };
    EndpointsViewComponent.prototype.showSocketMessages = function (socketData, modal) {
        this.setSocketRes(JSON.parse(JSON.stringify(socketData)));
        this.result['websocket'] = true;
        modal.show();
    };
    EndpointsViewComponent.prototype.setSocketRes = function (res) {
        for (var i = 0; i < res.messages.length; i++) {
            var message = res.messages[i];
            message.response = message.response;
        }
        this.result = res;
    };
    EndpointsViewComponent.prototype.setRes = function (res, request) {
        this.result['header'] = request.endPointData.summary;
        this.result['method'] = request.endPointData.method;
        this.result['url'] = res.url ? decodeURIComponent(res.url) : 'No URL Present';
        this.result['responseBody'] = res.body ? this.highlightJSInJson(res.body) : this.highlightJSInJson(res);
        this.result['responseBodyJson'] = res.body ? res.body : res;
        this.result['responseCode'] = res.status || 'No code Present';
        if (res.headers && res.headers.keys) {
            var keys = res.headers.keys();
            res.headers = keys.map(function (key) {
                return key + ": " + res.headers.get(key);
            });
        }
        this.result['responseHeader'] = this.highlightJSInJson(res.headers) || 'No Headers Present';
    };
    EndpointsViewComponent.prototype.highlightJSInJson = function (obj) {
        if (obj) {
            return (__WEBPACK_IMPORTED_MODULE_5__node_modules_highlight_js___["highlight"]('json', JSON.stringify(obj, null, 4)).value);
        }
    };
    EndpointsViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-endpoints-view',
            template: __webpack_require__("./src/app/views/endpoints-view/endpoints-view.component.html"),
            styles: [__webpack_require__("./src/app/views/endpoints-view/endpoints-view.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_swagger_service__["a" /* SwaggerService */],
            __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__services_config_service_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_8__services_shared_vars_service__["a" /* SharedVarsService */]])
    ], EndpointsViewComponent);
    return EndpointsViewComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = "#subHeader {\n  color: white; }\n\n@media (max-width: 991px) {\n  #sideBarArea {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
    }
    MainViewComponent.prototype.ngOnInit = function () {
    };
    MainViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/views/main/main.component.html"),
            styles: [__webpack_require__("./src/app/views/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/views/sample/sample.controller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_swagger_service__ = __webpack_require__("./src/app/services/swagger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_MOCK_DATA__ = __webpack_require__("./src/app/models/MOCK_DATA.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleViewComponent = /** @class */ (function () {
    function SampleViewComponent(swagger) {
        var _this = this;
        this.swagger = swagger;
        this.swaggerData = {};
        this.endPointData = __WEBPACK_IMPORTED_MODULE_2__models_MOCK_DATA__["a" /* APPENDPOINT */];
        this.swagger.getEndpointsSortedByTags().subscribe(function (res) {
            console.log(res);
            _this.swaggerData = res;
        });
    }
    SampleViewComponent.prototype.clickTest = function (test) {
        console.log(test);
    };
    SampleViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sample-view',
            template: __webpack_require__("./src/app/views/sample/sample.view.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_swagger_service__["a" /* SwaggerService */]])
    ], SampleViewComponent);
    return SampleViewComponent;
}());



/***/ }),

/***/ "./src/app/views/sample/sample.view.html":
/***/ (function(module, exports) {

module.exports = "<app-example-side-bar [endpoint]=\"\"></app-example-side-bar>\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map