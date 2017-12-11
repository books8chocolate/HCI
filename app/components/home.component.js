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
var inventory_service_1 = require("../service/inventory.service");
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
    function homeComponent(cart, router, service) {
        this.cart = cart;
        this.router = router;
        this.service = service;
        this.Catalog = [
            { Id: 66, Name: 'item4', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['White'], Quantity: 1, Description: 'A White Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'wHoodie.jpg' },
            { Id: 77, Name: 'item4', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'bCap.jpg' },
            { Id: 88, Name: 'item6', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 1, Description: 'A Black T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bShirt.jpg' }
        ];
        this.filteredCatalog = [];
        this.newItems = false;
        this.checkedVal = [];
    }
    homeComponent.prototype.ngOnInit = function () {
        for (var j = 0; j < this.service.Catalog.length; j++) {
            this.insert = {
                Id: this.service.Catalog[j].Id, Name: this.service.Catalog[j].Name, Category: this.service.Catalog[j].Category, Price: this.service.Catalog[j].Price,
                Size: this.service.Catalog[j].Size, Color: this.service.Catalog[j].Color, Quantity: 1, Description: this.service.Catalog[j].Description, Fit: this.service.Catalog[j].Fit,
                Seller: this.service.Catalog[j].Seller, pic: this.service.Catalog[j].pic
            };
            this.Catalog.push(this.insert);
        }
        for (var i = 0; i < this.Catalog.length; i++) {
            this.filteredCatalog.push(this.Catalog[i]);
        }
    };
    homeComponent.prototype.search = function () {
        this.filteredCatalog = [];
        var fixedParam = this.queryString.trim().toLowerCase();
        if (fixedParam.length == 0) {
            for (var i = 0; i < this.Catalog.length; i++) {
                this.filteredCatalog.push(this.Catalog[i]);
            }
        }
        else {
            for (var i = 0; i < this.Catalog.length; i++) {
                var item = this.Catalog[i];
                if (item.Name.toLowerCase().search(fixedParam) != -1 || item.Category.toLowerCase().search(fixedParam) != -1 ||
                    item.Description.toLowerCase().search(fixedParam) != -1 || item.Color[0].toLowerCase().search(fixedParam) != -1 ||
                    item.Price.toFixed(2).toString().toLowerCase().search(fixedParam) != -1) {
                    this.filteredCatalog.push(this.Catalog[i]);
                }
            }
        }
    };
    homeComponent.prototype.check = function (val) {
        this.checkedVal.push(val); //push new val check into array
        this.filteredCatalog = [];
        for (var j = 0; j < this.checkedVal.length; j++) {
            var filter = this.checkedVal[j];
            for (var i = 0; i < this.Catalog.length; i++) {
                var item = this.Catalog[i];
                //check if already in filter
                var inFilter = false;
                for (var u = 0; u < this.filteredCatalog.length; u++) {
                    if (this.filteredCatalog[u].Id == item.Id) {
                        inFilter = true;
                        break;
                    }
                }
                if (inFilter == false) {
                    if (item.Category.toLowerCase() == filter ||
                        item.Color[0].toLowerCase() == filter) {
                        this.filteredCatalog.push(this.Catalog[i]);
                    }
                }
            }
        }
    };
    homeComponent.prototype.uncheck = function (val) {
        this.checkedVal.splice(this.checkedVal.indexOf(val), 1);
        if (this.checkedVal.length == 0) {
            this.filteredCatalog = [];
            for (var i = 0; i < this.Catalog.length; i++) {
                this.filteredCatalog.push(this.Catalog[i]);
            }
        }
        else {
            for (var i = 0; i < this.filteredCatalog.length; i++) {
                var item = this.filteredCatalog[i];
                var keep = false;
                if (item.Category.toLowerCase() == val ||
                    item.Color[0].toLowerCase() == val) {
                    for (var w = 0; w < this.checkedVal.length; w++) {
                        if (item.Category.toLowerCase() == this.checkedVal[w] ||
                            item.Color[0].toLowerCase() == this.checkedVal[w]) {
                            keep = true;
                            break;
                        }
                    }
                    if (keep == false) {
                        this.filteredCatalog.splice(i, 1);
                        i--;
                    }
                }
            }
        }
    };
    homeComponent.prototype.productCart = function (num) {
        var item;
        for (var i = 0; i < this.Catalog.length; i++) {
            if (this.Catalog[i].Id == num) {
                item = this.Catalog[i];
                break;
            }
        }
        this.cart.cartItems.push(item);
        this.newItems = true;
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
    __metadata("design:paramtypes", [cart_service_1.cartService, router_1.Router, inventory_service_1.inventoryService])
], homeComponent);
exports.homeComponent = homeComponent;
//# sourceMappingURL=home.component.js.map