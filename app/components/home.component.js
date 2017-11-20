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
var router_1 = require("@angular/router");
var cart_service_1 = require("../service/cart.service");
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
var homeComponent = (function () {
    function homeComponent(cart, router) {
        this.cart = cart;
        this.router = router;
        this.Catalog = [
            { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 0, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bHoodie.jpg' },
            { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'White'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'pHat.jpg' },
            { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 1, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'pShirt.jpg' },
            { Id: 3, Name: 'item4', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['White'], Quantity: 1, Description: 'A White Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'wHoodie.jpg' },
            { Id: 4, Name: 'item4', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'Purple'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'bCap.jpg' },
            { Id: 5, Name: 'item6', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 1, Description: 'A Black T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bShirt.jpg' }
        ];
        this.newItems = false;
    }
    homeComponent.prototype.productCart = function (num) {
        this.cart.cartItems.push(this.Catalog[num]);
        this.newItems = true;
        console.log(this.cart.cartItems);
    };
    homeComponent.prototype.pageCart = function () {
        this.newItems = false;
        this.router.navigateByUrl('/Cart');
    };
    homeComponent.prototype.priceNum = function (num) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    };
    homeComponent.prototype.inCart = function (num) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                return true;
            }
        }
        return false;
    };
    return homeComponent;
}());
homeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'app/components/home.component.html',
    }),
    __metadata("design:paramtypes", [cart_service_1.cartService, router_1.Router])
], homeComponent);
exports.homeComponent = homeComponent;
//# sourceMappingURL=home.component.js.map