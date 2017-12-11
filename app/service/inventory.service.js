"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Product = (function () {
    function Product() {
        this.pic = null;
        this.Id = null;
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
var inventoryService = (function () {
    function inventoryService() {
        this.Catalog = [
            { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 25, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bHoodie.jpg' },
            { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Purple'], Quantity: 25, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'pHat.jpg' },
            { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 25, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'pShirt.jpg' }
        ];
    }
    return inventoryService;
}());
inventoryService = __decorate([
    core_1.Injectable()
], inventoryService);
exports.inventoryService = inventoryService;
//# sourceMappingURL=inventory.service.js.map