"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var Product = (function () {
    function Product() {
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
        var _this = this;
        this.Catalog = [
            { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 25, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1' },
            { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'White'], Quantity: 25, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1' },
            { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 25, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1' }
        ];
        this.dataChange = new Observable_1.Observable(function (observer) {
            _this.dataChangeObserver = observer;
        });
    }
    inventoryService.prototype.setData = function (data) {
        this.Catalog = data;
        this.dataChangeObserver.next(this.Catalog);
    };
    return inventoryService;
}());
exports.inventoryService = inventoryService;
//# sourceMappingURL=inventory.service.js.map