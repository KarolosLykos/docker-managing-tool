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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<main class=\"container\">\r\n  <simple-notifications></simple-notifications>\r\n  <router-outlet></router-outlet>\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_container_container_component__ = __webpack_require__("./src/app/components/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_logs_logs_component__ = __webpack_require__("./src/app/components/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_actions_actions_component__ = __webpack_require__("./src/app/components/actions/actions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_create_component__ = __webpack_require__("./src/app/components/create/create.component.ts");
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

/***/ "./src/app/components/actions/actions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/actions/actions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <div *ngIf=container class=\"card cyan darken-4\">\r\n      <div class=\"card-content white-text\">\r\n        <span class=\"card-title\">{{ container.Id }}</span>\r\n        <ul>\r\n          <li>Image: {{ container.Image }}</li>\r\n          <li>Id: {{ container.Id }}</li>\r\n          <li>State: {{ container.State }}</li>\r\n          <li>Status: {{ container.Status }}</li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"card-action\">\r\n        <a (click)=\"startContainer()\"\r\n          [ngClass]=\"{disabled: container.State==='running'}\"\r\n          class=\"waves-effect waves-light btn green\">Start</a>\r\n        <a (click)=\"restartContainer()\" \r\n          class=\"waves-effect waves-light btn blue\">Restart</a>\r\n        <a (click)=\"stopContainer()\" \r\n          [ngClass]=\"{disabled: container.State!=='running'}\"\r\n          class=\"waves-effect waves-light btn yellow-darken\">Stop</a>\r\n        <a (click)=\"deleteContainer()\" \r\n          class=\"waves-effect waves-light btn red\">Delete</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/actions/actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            template: __webpack_require__("./src/app/components/actions/actions.component.html"),
            styles: [__webpack_require__("./src/app/components/actions/actions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/container/container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h4>Container Stats</h4>\r\n  <div *ngIf=stat>\r\n    <h3>Time: {{ stat.read | date:'yyyy-MM-dd HH:mm:ss' }}</h3>\r\n    <table class=\"striped centered\">\r\n      <thead>\r\n        <tr>\r\n            <th> Memory Usage </th>\r\n            <th> Max Memory Usage </th>\r\n            <th> Memory Limit </th>\r\n            <th> System CPU Usage</th>\r\n            <th> Per CPU usage</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n          <tr>\r\n            <td>{{ stat.memory_stats.max_usage }}</td>\r\n            <td>{{ stat.memory_stats.usage }}</td>\r\n            <td>{{ stat.memory_stats.limit }}</td>\r\n            <td>{{ stat.cpu_stats.system_cpu_usage }}</td>\r\n            <td><li *ngFor=\"let cpu of stat.cpu_stats.cpu_usage.percpu_usage\">{{ cpu }}</li></td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <h4>Container Processes</h4>\r\n  <div *ngIf=msg>\r\n    <p  class=\"flow-text\" style=\"overflow-wrap: break-word;\">Id: {{ msg }}</p>\r\n  </div>\r\n  <table class=\"striped centered\">\r\n    <thead>\r\n      <tr *ngIf=titles>\r\n          <th *ngFor=\"let title of titles\"> {{ title }} </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngIf=processes>\r\n        <tr *ngFor=\"let process of processes\">\r\n          <td *ngFor=\"let item of process\">{{ item }}</td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n</div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
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
            template: __webpack_require__("./src/app/components/container/container.component.html"),
            styles: [__webpack_require__("./src/app/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <form (submit)=\"onCreateSubmit()\" class=\"col s12\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">done</i>\r\n          <input id=\"name\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"validate\">\r\n          <label for=\"name\">Name</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">done</i>\r\n          <input id=\"image\" type=\"text\" [(ngModel)]=\"image\" name=\"image\" class=\"validate\">\r\n          <label for=\"image\">Image</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">info</i>\r\n          <input value=\"asd\" id=\"tag\" type=\"text\" [(ngModel)]=\"tag\" name=\"tag\">\r\n          <label for=\"tag\">Tag</label>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\r\n          <i class=\"material-icons right\">send</i>\r\n      </button>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=loading class=\"preloader-wrapper big active\">\r\n    <div class=\"spinner-layer spinner-blue-only\">\r\n      <div class=\"circle-clipper left\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"gap-patch\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"circle-clipper right\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div *ngIf=logs>\r\n    <h4>{{ logs }}</h4>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
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
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__["connect"]('http://localhost:3000/create');
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.loading = false;
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
            this.loading = true;
            this.dockerService.createContainer(this.name, this.image, this.tag)
                .subscribe(function (data) {
                if (data.success) {
                    _this.notificationsService.success('Success', data.msg, { timeOut: 3000, clickToClose: true });
                    _this.router.navigate(['/']);
                }
                else {
                    _this.notificationsService.error('Error', data.msg, { timeOut: 3000, clickToClose: true });
                    _this.router.navigate(['/']);
                }
            });
            return true;
        }
        // this.socket.on('create', (data: any) => {
        //    this.logs = data
        //    })
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/components/create/create.component.html"),
            styles: [__webpack_require__("./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_2__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <form (submit)=\"onSubmit()\" class=\"col s12\" enctype=\"multipart/form-data\">\r\n      <div class=\"row\">\r\n        <div class=\"input-field col s12\">\r\n          <i class=\"material-icons prefix\">done</i>\r\n          <input id=\"tag\" type=\"text\" [(ngModel)]=\"tag\" name=\"tag\" class=\"validate\">\r\n          <label for=\"tag\">Tag</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row file-field input-field\">\r\n        <div class=\"btn\">\r\n          <span>Tar</span>\r\n          <input type=\"file\"\r\n          name=\"cin\" id=\"cin\"\r\n          (change)=\"onFileSelection($event)\"\r\n          multiple/>\r\n        </div>\r\n        <div class=\"file-path-wrapper\">\r\n          <input class=\"file-path validate\" type=\"text\">\r\n        </div>\r\n      </div>\r\n      <button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\r\n          <i class=\"material-icons right\">send</i>\r\n      </button>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=loading class=\"preloader-wrapper big active\">\r\n    <div class=\"spinner-layer spinner-blue-only\">\r\n      <div class=\"circle-clipper left\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"gap-patch\">\r\n        <div class=\"circle\"></div>\r\n      </div><div class=\"circle-clipper right\">\r\n        <div class=\"circle\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
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
    function DashboardComponent(notificationsService, dockerService, http) {
        this.notificationsService = notificationsService;
        this.dockerService = dockerService;
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    DashboardComponent.prototype.onFileSelection = function (fileInput) {
        this.filesToUpload = fileInput.target.files[0];
    };
    DashboardComponent.prototype.onSubmit = function () {
        if (this.tag === undefined || this.filesToUpload === undefined) {
            this.notificationsService.error('Error', 'Field tag and tar not optional', { timeOut: 3000, clickToClose: true });
        }
        else if (this.filesToUpload.type !== 'application/x-tar') {
            this.notificationsService.error('Error', 'Input file must be tar', { timeOut: 3000, clickToClose: true });
        }
        else {
            this.loading = true;
            var formData = new FormData();
            var file = this.filesToUpload;
            formData.append('tarFile', file, this.filesToUpload.name);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            console.log(this.tag);
            this.dockerService.buildImage(formData, this.tag)
                .subscribe(function (files) { return console.log('files', files); });
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s4\">\r\n  <h1>Images</h1>\r\n  <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\r\n    <li *ngFor=\"let image of images\">\r\n      <div class=\"collapsible-header cyan darken-4\">\r\n        <h5 class=\"white-text\">\r\n          <div *ngFor=\"let rt of image.repoTags\" class=\"chip\">{{rt}}</div>\r\n        </h5>\r\n      </div>\r\n      <div class=\"collapsible-body teal lighten-5\">\r\n      <span class=\"card-title\">\r\n        <p class=\"flow-text\" style=\"overflow-wrap: break-word;\">{{image.id}}</p>\r\n      </span>\r\n        <p>Containers : {{image.containers === -1 ? 0 : image.containers}}</p>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n  </div>\r\n  <div class=\"col s8\">\r\n    <h1>Containers<a (click)=\"onCreateClicked()\" class=\"waves-effect waves-light btn\">Create</a></h1>\r\n    <ul materialize=\"collapsible\" class=\"collapsible popout\" data-collapsible=\"accordion\">\r\n      <li *ngFor=\"let container of containers\">\r\n        <div class=\"collapsible-header cyan darken-4\">\r\n          <h5 class=\"white-text\">{{container.name}}</h5>\r\n        </div>\r\n        <div class=\"collapsible-body teal lighten-5\">\r\n        <span>\r\n          <p  class=\"flow-text\" style=\"overflow-wrap: break-word;\">Id: {{ container.id }}</p>\r\n          <p>State: {{ container.state }}</p>\r\n          <p>Status: {{ container.status }}</p>\r\n          <div class=\"chip cyan darken-4\">\r\n            {{ container.image }}\r\n          </div>\r\n          <p>Cmd: {{ container.cmd }}</p>\r\n          <p>Created: {{ container.created  * 1000 | date:'yyyy-MM-dd HH:mm:ss' }}</p>\r\n          <a (click)=\"onInfoClicked(container.id)\" class=\"waves-effect waves-light btn\">Info</a>\r\n          <a (click)=\"onLogsClicked(container.id)\" class=\"waves-effect waves-light btn\">Logs</a>\r\n          <a (click)=\"onActionsClicked(container.id)\" class=\"waves-effect waves-light btn\">Actions</a>\r\n        </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/logs/logs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col s12\">\r\n\t  <div class=\"card blue-grey darken-1\">\r\n\t    <div class=\"card-content white-text\">\r\n\t      <span class=\"card-title\">Logs</span>\r\n\t      <p *ngIf=info>{{ info }}</p>\r\n\t    </div>\r\n\t  </div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_docker_service__ = __webpack_require__("./src/app/services/docker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
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
            template: __webpack_require__("./src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__("./src/app/components/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_docker_service__["a" /* DockerService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["NotificationsService"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\r\n  <nav class=\"cyan darken-4\">\r\n      <div class=\"nav-wrapper\">\r\n        <a href=\"#!\" class=\"brand-logo center\">Docker</a>\r\n        <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n        <ul class=\"left hide-on-med-and-down\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"right hide-on-med-and-down\">\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n  </nav>\r\n</div>\r\n<ul class=\"side-nav\" id=\"mobile-demo\">\r\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <a [routerLink]=\"['/']\">Home</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/docker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DockerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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
    DockerService.prototype.buildImage = function (formData, tag) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.post('http://localhost:3000/docker/image/build', formData, { params: { tag: tag }, headers: headers })
            .map(function (files) { return files.json(); });
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


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map