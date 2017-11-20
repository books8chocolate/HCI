"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./components/app-routing.module");
var main_component_1 = require("./components/main.component");
var inventory_component_1 = require("./components/inventory.component");
var bsInfo_component_1 = require("./components/bsInfo.component");
var tabs_component_1 = require("./components/tabs.component");
var home_component_1 = require("./components/home.component");
var cart_component_1 = require("./components/cart.component");
var cart_service_1 = require("./service/cart.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule],
        declarations: [main_component_1.mainComponent, inventory_component_1.inventoryComponent, bsInfo_component_1.bsInfoComponent, tabs_component_1.tabsComponent, home_component_1.homeComponent, cart_component_1.cartComponent],
        providers: [cart_service_1.cartService],
        bootstrap: [main_component_1.mainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map