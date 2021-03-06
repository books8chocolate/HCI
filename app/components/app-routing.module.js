"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_component_1 = require("./main.component");
var inventory_component_1 = require("./inventory.component");
var bsInfo_component_1 = require("./bsInfo.component");
var home_component_1 = require("./home.component");
var cart_component_1 = require("./cart.component");
var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Main', component: main_component_1.mainComponent },
    { path: 'Inventory', component: inventory_component_1.inventoryComponent },
    { path: 'bsInfo', component: bsInfo_component_1.bsInfoComponent },
    { path: 'Cart', component: cart_component_1.cartComponent },
    { path: 'Home', component: home_component_1.homeComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map