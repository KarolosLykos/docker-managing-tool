webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<main class=\"container\">\n  <simple-notifications></simple-notifications>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__ = __webpack_require__("../../../../../src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__ = __webpack_require__("../../../../../src/app/components/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_actions_actions_component__ = __webpack_require__("../../../../../src/app/components/actions/actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_create_component__ = __webpack_require__("../../../../../src/app/components/create/create.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'container', component: __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__["a" /* ContainerComponent */] },
    { path: 'logs', component: __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__["a" /* LogsComponent */] },
    { path: 'actions', component: __WEBPACK_IMPORTED_MODULE_15__components_actions_actions_component__["a" /* ActionsComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_16__components_create_create_component__["a" /* CreateComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__["a" /* ContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__["a" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_actions_actions_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_create_create_component__["a" /* CreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_docker_service__["a" /* DockerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12\">\n    <div *ngIf=container class=\"card cyan darken-4\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">{{ container.Id }}</span>\n        <ul>\n          <li>Image: {{ container.Image }}</li>\n          <li>Id: {{ container.Id }}</li>\n          <li>State: {{ container.State }}</li>\n          <li>Status: {{ container.Status }}</li>\n        </ul>\n\n      </div>\n      <div class=\"card-action\">\n        <a (click)=\"startContainer()\"\n          [ngClass]=\"{disabled: container.State==='running'}\"\n          class=\"waves-effect waves-light btn green\">Start</a>\n        <a (click)=\"restartContainer()\" \n          class=\"waves-effect waves-light btn blue\">Restart</a>\n        <a (click)=\"stopContainer()\" \n          [ngClass]=\"{disabled: container.State!=='running'}\"\n          class=\"waves-effect waves-light btn yellow-darken\">Stop</a>\n        <a (click)=\"deleteContainer()\" \n          class=\"waves-effect waves-light btn red\">Delete</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/actions/actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActionsComponent = (function () {
    function ActionsComponent(dockerService, notificationsService, route, router) {
        this.dockerService = dockerService;
        this.notificationsService = notificationsService;
        this.route = route;
        this.router = router;
    }
    ActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.getContainerInfo(this.id);
    };
    ActionsComponent.prototype.getContainerInfo = function (id) {
        var _this = this;
        this.dockerService.getContainerInfo(id)
            .subscribe(function (data) {
            if (data.success) {
                _this.container = data.data;
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ActionsComponent.prototype.startContainer = function () {
        var _this = this;
        this.dockerService.startContainer(this.id).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ActionsComponent.prototype.restartContainer = function () {
        var _this = this;
        this.dockerService.restartContainer(this.id).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ActionsComponent.prototype.stopContainer = function () {
        var _this = this;
        this.dockerService.stopContainer(this.id).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/']);
                _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ActionsComponent.prototype.deleteContainer = function () {
        var _this = this;
        this.dockerService.deleteContainer(this.id).subscribe(function (data) {
            if (data.success) {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
                _this.router.navigate(['/']);
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actions',
            template: __webpack_require__("../../../../../src/app/components/actions/actions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/actions/actions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h4>Container Stats</h4>\n  <div *ngIf=stat>\n    <h3>Time: {{ stat.read | date:'yyyy-MM-dd HH:mm:ss' }}</h3>\n    <table class=\"striped centered\">\n      <thead>\n        <tr>\n            <th> Memory Usage </th>\n            <th> Max Memory Usage </th>\n            <th> Memory Limit </th>\n            <th> System CPU Usage</th>\n            <th> Per CPU usage</th>\n        </tr>\n      </thead>\n      <tbody>\n          <tr>\n            <td>{{ stat.memory_stats.max_usage }}</td>\n            <td>{{ stat.memory_stats.usage }}</td>\n            <td>{{ stat.memory_stats.limit }}</td>\n            <td>{{ stat.cpu_stats.system_cpu_usage }}</td>\n            <td><li *ngFor=\"let cpu of stat.cpu_stats.cpu_usage.percpu_usage\">{{ cpu }}</li></td>\n          </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"row\">\n  <h4>Container Processes</h4>\n  <div *ngIf=msg>\n    <p  class=\"flow-text\" style=\"overflow-wrap: break-word;\">Id: {{ msg }}</p>\n  </div>\n  <table class=\"striped centered\">\n    <thead>\n      <tr *ngIf=titles>\n          <th *ngFor=\"let title of titles\"> {{ title }} </th>\n      </tr>\n    </thead>\n    <tbody *ngIf=processes>\n        <tr *ngFor=\"let process of processes\">\n          <td *ngFor=\"let item of process\">{{ item }}</td>\n        </tr>\n    </tbody>\n  </table>\n</div>  \n\n"

/***/ }),

/***/ "../../../../../src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContainerComponent = (function () {
    function ContainerComponent(route, dockerService, notificationsService) {
        var _this = this;
        this.route = route;
        this.dockerService = dockerService;
        this.notificationsService = notificationsService;
        this.alive = true;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__["connect"]('http://localhost:3000/stats');
    }
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dockerService.getContainerStatus(this.id)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (data) {
            if (data.success) {
                _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
        this.socket.on('stats', function (data) {
            _this.stat = JSON.parse(data.stat);
        });
        this.dockerService.getContainerTop(this.id).subscribe(function (data) {
            if (data.success) {
                _this.processes = data.data.Processes;
                _this.titles = data.data.Titles;
            }
            else {
                _this.notificationsService.error('Error', data.data.json.message, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    ContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-container',
            template: __webpack_require__("../../../../../src/app/components/container/container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form (submit)=\"onCreateSubmit()\" class=\"col s12\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">done</i>\n          <input id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"validate\">\n          <label for=\"name\">Name</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">done</i>\n          <input id=\"image\" type=\"text\" [(ngModel)]=\"image\" name=\"image\" class=\"validate\">\n          <label for=\"image\">Image</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">info</i>\n          <input value=\"asd\" id=\"tag\" type=\"text\" [(ngModel)]=\"tag\" name=\"tag\">\n          <label for=\"tag\">Tag</label>\n        </div>\n      </div>\n      <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n          <i class=\"material-icons right\">send</i>\n      </button>\n    </form>\n  </div>\n\n  <div *ngIf=logs>\n    <h4>{{ logs }}</h4>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = (function () {
    function CreateComponent(notificationsService, dockerService, router) {
        this.notificationsService = notificationsService;
        this.dockerService = dockerService;
        this.router = router;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onCreateSubmit = function () {
        var _this = this;
        if (this.tag === undefined) {
            this.tag = '';
        }
        if (this.name === undefined || this.image === undefined) {
            this.notificationsService.error('Error', 'Field Name and Image not optional', { timeOut: 3000, clickToClose: true });
        }
        else {
            this.dockerService.createContainer(this.name, this.image, this.tag)
                .subscribe(function (data) {
                if (data.success) {
                    _this.notificationsService.success('Success', 'data.msg', { timeOut: 3000, clickToClose: true });
                    _this.router.navigate(['/']);
                }
                else {
                    console.log(data);
                    _this.notificationsService.error('Error', 'data.msg', { timeOut: 3000, clickToClose: true });
                    _this.router.navigate(['/']);
                }
            });
            return true;
        }
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/components/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_2__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "  <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\n    <li>\n      <div class=\"collapsible-header cyan darken-4\"><i class=\"material-icons\">filter_drama</i><h5 class=\"text-teal lighten-5\">First</h5></div>\n      <div class=\"collapsible-body teal lighten-5\"><span>Lorem ipsum dolor sit amet.</span></div>\n    </li>\n    <li>\n      <div class=\"collapsible-header cyan darken-4\"><i class=\"material-icons\">place</i><h5 class=\"text-teal lighten-5\">Second</h5></div>\n      <div class=\"collapsible-body teal lighten-5\"><span>Lorem ipsum dolor sit amet.</span></div>\n    </li>\n    <li>\n      <div class=\"collapsible-header cyan darken-4\"><i class=\"material-icons\">whatshot</i><h5 class=\"text-teal lighten-5\">Third</h5></div>\n      <div class=\"collapsible-body teal lighten-5\"><span>Lorem ipsum dolor sit amet.</span></div>\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    // messageText: string;
    //    messages: Array<any>;
    // socket2: SocketIOClient.Socket;
    // socket: SocketIOClient.Socket;
    function DashboardComponent(dockerService) {
        this.dockerService = dockerService;
        // this.socket2 = io.connect('http://localhost:3000/my-namespace2')
        // this.socket = io.connect('http://localhost:3000/my-namespace')
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.dockerService.getContainerStatus('613c65fb9a71346fe1c21912cf8ad07f87517043dd96afda3e49f831fe741acd').subscribe( data => {
        // if(data.success){
        // this.processes = data.data.Processes
        // this.titles = data.data.Titles
        //  console.log(data)
        // }else{
        // this.notificationsService.success('Error',data.data.json.message, { timeOut: 3000, clickToClose: true });
        //     console.log(data)
        //   } 
        // })
        // this.socket2.on('event2', function(data) { 
        //     console.log(data);
        //   })
        // this.socket.on('event1', function(data) { 
        //     console.log(data);
        //   })
        // this.socket.on('connect', function(){
        //   console.log("SOCKET CLIENT CONNECT")
        // });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s4\">\n  <h1>Images</h1>\n  <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\n    <li *ngFor=\"let image of images\">\n      <div class=\"collapsible-header cyan darken-4\">\n        <h5 class=\"white-text\">\n          <div *ngFor=\"let rt of image.repoTags\" class=\"chip\">{{rt}}</div>\n        </h5>\n      </div>\n      <div class=\"collapsible-body teal lighten-5\">\n      <span class=\"card-title\">\n        <p class=\"flow-text\" style=\"overflow-wrap: break-word;\">{{image.id}}</p>\n      </span>\n        <p>Containers : {{image.containers === -1 ? 0 : image.containers}}</p>\n      </div>\n    </li>\n  </ul>\n  </div>\n  <div class=\"col s8\">\n    <h1>Containers<a (click)=\"onCreateClicked()\" class=\"waves-effect waves-light btn\">Create</a></h1>\n    <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\n      <li *ngFor=\"let container of containers\">\n        <div class=\"collapsible-header cyan darken-4\">\n          <h5 class=\"white-text\">{{container.name}}</h5>\n        </div>\n        <div class=\"collapsible-body teal lighten-5\">\n        <span>\n          <p  class=\"flow-text\" style=\"overflow-wrap: break-word;\">Id: {{ container.id }}</p>\n          <p>State: {{ container.state }}</p>\n          <p>Status: {{ container.status }}</p>\n          <div class=\"chip cyan darken-4\">\n            {{ container.image }}\n          </div>\n          <p>Cmd: {{ container.cmd }}</p>\n          <p>Created: {{ container.created  * 1000 | date:'yyyy-MM-dd HH:mm:ss' }}</p>\n          <a (click)=\"onInfoClicked(container.id)\" class=\"waves-effect waves-light btn\">Info</a>\n          <a (click)=\"onLogsClicked(container.id)\" class=\"waves-effect waves-light btn\">Logs</a>\n          <a (click)=\"onActionsClicked(container.id)\" class=\"waves-effect waves-light btn\">Actions</a>\n        </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(dockerService, notificationsService, router) {
        this.dockerService = dockerService;
        this.notificationsService = notificationsService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dockerService.getContainersList().subscribe(function (data) {
            if (data.success) {
                _this.containers = data.data;
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
        this.dockerService.getImageList().subscribe(function (data) {
            if (data.success) {
                _this.images = data.data;
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
    };
    HomeComponent.prototype.onInfoClicked = function (id) {
        this.router.navigate(['/container', { id: id }]);
    };
    HomeComponent.prototype.onActionsClicked = function (id) {
        this.router.navigate(['/actions', { id: id }]);
    };
    HomeComponent.prototype.onLogsClicked = function (id) {
        this.router.navigate(['/logs', { id: id }]);
    };
    HomeComponent.prototype.onCreateClicked = function () {
        this.router.navigate(['/create']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col s12\">\n\t  <div class=\"card blue-grey darken-1\">\n\t    <div class=\"card-content white-text\">\n\t      <span class=\"card-title\">Logs</span>\n\t      <p *ngIf=info>{{ info }}</p>\n\t    </div>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("../../../../../src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogsComponent = (function () {
    function LogsComponent(route, dockerService, notificationsService) {
        var _this = this;
        this.route = route;
        this.dockerService = dockerService;
        this.notificationsService = notificationsService;
        this.alive = true;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__["connect"]('http://localhost:3000/logs');
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dockerService.getContainerLogs(this.id)
            .takeWhile(function () { return _this.alive; })
            .subscribe(function (data) {
            if (data.success) {
                _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
            }
            else {
                _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
            }
        });
        this.socket.on('logs', function (data) {
            console.log(data);
            _this.info = data.info;
        });
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__("../../../../../src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav class=\"cyan darken-4\">\n      <div class=\"nav-wrapper\">\n        <a href=\"#!\" class=\"brand-logo center\">Docker</a>\n        <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n        <ul class=\"left hide-on-med-and-down\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a [routerLink]=\"['/']\">Home</a>\n          </li>\n        </ul>\n        <ul class=\"right hide-on-med-and-down\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n</div>\n<ul class=\"side-nav\" id=\"mobile-demo\">\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n    <a [routerLink]=\"['/']\">Home</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/docker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DockerService = (function () {
    function DockerService(http) {
        this.http = http;
    }
    DockerService.prototype.getContainersList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/docker/containers/list', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.getImageList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/docker/images/list', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.getContainerTop = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/docker/container/top', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.getContainerLogs = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/docker/container/logs', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.getContainerStatus = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/docker/container/status', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.getContainerInfo = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/docker/container/info', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.createContainer = function (name, image, tag) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/docker/container/create', { params: {
                name: name,
                image: image,
                tag: tag
            }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.startContainer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/docker/container/start', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.restartContainer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/docker/container/restart', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.stopContainer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/docker/container/stop', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService.prototype.deleteContainer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete('http://localhost:3000/docker/container/delete', { params: { id: id }, headers: headers })
            .map(function (res) { return res.json(); });
    };
    DockerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DockerService);
    return DockerService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map