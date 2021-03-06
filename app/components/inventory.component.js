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
var inventoryComponent = (function () {
    function inventoryComponent(service) {
        this.service = service;
        this.saved = false;
        this.add = false;
        this.edit = false;
        this.list = true;
        this.lastID = 2;
        this.edDel = false;
        this.try = false;
        this.test = [];
        this.Colors = ['Black', 'White', 'Gray', 'Purple'];
        this.Sizes = ['XS', 'S', 'M', 'L', 'XL'];
        this.Categories = ['', 'Shirt', 'Hoodie', 'Hat'];
        this.Fits = ['Men', 'Women'];
        this.product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller', Color: [], Size: [], Fit: [] };
        this.oldProduct = { Id: -1, Name: '', Seller: '' };
        this.Catalog = this.service.Catalog;
    }
    inventoryComponent.prototype.addItem = function () {
        this.Catalog.push(this.product);
        this.saved = true;
        this.add = false;
    };
    inventoryComponent.prototype.inventory = function () {
        this.list = true;
        this.saved = false;
        this.add = false;
        this.edDel = false;
        this.edit = false;
    };
    inventoryComponent.prototype.selected = function (id) {
        console.log(this.service.Catalog);
        this.product.Id = this.Catalog[id].Id;
        this.product.Name = this.Catalog[id].Name;
        this.product.Description = this.Catalog[id].Description;
        this.product.Price = this.Catalog[id].Price;
        this.product.Quantity = this.Catalog[id].Quantity;
        this.product.Color = this.Catalog[id].Color;
        this.product.Size = this.Catalog[id].Size;
        this.product.Category = this.Catalog[id].Category;
        this.product.Seller = this.Catalog[id].Seller;
        this.product.Fit = this.Catalog[id].Fit;
        this.edDel = true;
    };
    inventoryComponent.prototype.toAdd = function () {
        this.product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller', Color: [], Size: [], Fit: [] };
        this.list = false;
        this.saved = false;
        this.add = true;
    };
    inventoryComponent.prototype.check = function (value, type) {
        if (type == 'size') {
            if (this.product.Size.indexOf(value) == -1)
                this.product.Size.push(value);
        }
        else if (type == 'color') {
            if (this.product.Color.indexOf(value) == -1)
                this.product.Color.push(value);
        }
        else if (type == 'fit') {
            if (this.product.Fit.indexOf(value) == -1)
                this.product.Fit.push(value);
        }
    };
    inventoryComponent.prototype.checked = function (value, type) {
        if (type == 'size') {
            if (this.product.Size.indexOf(value) == -1)
                return false;
        }
        else if (type == 'color') {
            if (this.product.Color.indexOf(value) == -1)
                return false;
        }
        else if (type == 'fit') {
            if (this.product.Fit.indexOf(value) == -1)
                return false;
        }
        return true;
    };
    inventoryComponent.prototype.uncheck = function (value, type) {
        var i = 0;
        if (type == 'size') {
            this.product.Size.splice(this.product.Size.indexOf(value), 1);
        }
        else if (type == 'color') {
            this.product.Color.splice(this.product.Color.indexOf(value), 1);
        }
        else if (type == 'fit') {
            this.product.Fit.splice(this.product.Fit.indexOf(value), 1);
        }
    };
    inventoryComponent.prototype.toEdit = function () {
        this.list = false;
        this.saved = false;
        this.add = true;
        this.edDel = false;
        this.edit = true;
    };
    inventoryComponent.prototype.editItem = function () {
        this.Catalog[this.product.Id].Id = this.product.Id;
        this.Catalog[this.product.Id].Name = this.product.Name;
        this.Catalog[this.product.Id].Description = this.product.Description;
        this.Catalog[this.product.Id].Price = this.product.Price;
        this.Catalog[this.product.Id].Quantity = this.product.Quantity;
        this.Catalog[this.product.Id].Color = this.product.Color;
        this.Catalog[this.product.Id].Size = this.product.Size;
        this.Catalog[this.product.Id].Category = this.product.Category;
        this.Catalog[this.product.Id].Seller = this.product.Seller;
        this.Catalog[this.product.Id].Fit = this.product.Fit;
        this.saved = true;
        this.add = false;
    };
    inventoryComponent.prototype.removeItem = function () {
        this.Catalog.splice(this.product.Id, 1);
        this.saved = true;
        this.list = false;
    };
    return inventoryComponent;
}());
inventoryComponent = __decorate([
    core_1.Component({
        selector: 'inventory',
        templateUrl: 'app/components/inventory.component.html',
    }),
    __metadata("design:paramtypes", [inventory_service_1.inventoryService])
], inventoryComponent);
exports.inventoryComponent = inventoryComponent;
//# sourceMappingURL=inventory.component.js.map