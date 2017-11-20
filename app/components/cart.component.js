"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cart_service_1 = require("../service/cart.service");
var router_1 = require("@angular/router");
var Product = (function () {
    function Product() {
        this.Id = null;
        this.pic = null;
        this.Name = null;
        this.Category = null;
        this.Price = null;
        this.Size = [];
        this.Color = [];
        this.Quantity = null;
        this.Description = null;
        this.Seller = null;
        this.Fit = [];
    }
    return Product;
}());
exports.Product = Product;
var cartComponent = (function () {
    function cartComponent(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    cartComponent.prototype.delete = function (num) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                this.cart.cartItems.splice(i, 1);
            }
        }
    };
    cartComponent.prototype.inc = function (num) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                this.cart.cartItems[i].Quantity++;
            }
        }
    };
    cartComponent.prototype.dec = function (num) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                if (this.cart.cartItems[i].Quantity != 0)
                    this.cart.cartItems[i].Quantity--;
            }
        }
    };
    cartComponent.prototype.proctoCheck = function () {
        this.router.navigateByUrl('/bsInfo');
    };
    cartComponent.prototype.home = function () {
        this.router.navigateByUrl('/Home');
    };
    cartComponent.prototype.priceNum = function (num) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    };
    cartComponent.prototype.cost = function () {
        var cost = 0;
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            cost += this.cart.cartItems[i].Price * this.cart.cartItems[i].Quantity;
        }
        return cost;
    };
    return cartComponent;
}());
cartComponent = __decorate([
    core_1.Component({
        selector: 'cart',
        templateUrl: 'app/components/cart.component.html',
    }),
    __metadata("design:paramtypes", [cart_service_1.cartService, router_1.Router])
], cartComponent);
exports.cartComponent = cartComponent;
//# sourceMappingURL=cart.component.js.map