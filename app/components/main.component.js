"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 0] = "Black";
    Colors[Colors["White"] = 1] = "White";
    Colors[Colors["Red"] = 2] = "Red";
    Colors[Colors["Orange"] = 3] = "Orange";
    Colors[Colors["Yellow"] = 4] = "Yellow";
    Colors[Colors["Green"] = 5] = "Green";
    Colors[Colors["Blue"] = 6] = "Blue";
    Colors[Colors["Purple"] = 7] = "Purple";
    Colors[Colors["Brown"] = 8] = "Brown";
})(Colors || (Colors = {}));
;
var Sizes;
(function (Sizes) {
    Sizes[Sizes["XS"] = 0] = "XS";
    Sizes[Sizes["S"] = 1] = "S";
    Sizes[Sizes["M"] = 2] = "M";
    Sizes[Sizes["L"] = 3] = "L";
    Sizes[Sizes["XL"] = 4] = "XL";
})(Sizes || (Sizes = {}));
;
var Categories;
(function (Categories) {
    Categories[Categories["Shirt"] = 0] = "Shirt";
    Categories[Categories["Hoodie"] = 1] = "Hoodie";
    Categories[Categories["Hat"] = 2] = "Hat";
})(Categories || (Categories = {}));
;
var Product = (function () {
    function Product() {
        this.Id = null;
        this.Name = null;
        this.Category = null;
        //Category?: Categories = null;
        this.Price = null;
        this.Size = null;
        //Size?: Sizes[] = null;
        this.Color = null;
        //Color?: Colors[] = null;
        this.Quantity = null;
        this.Description = null;
        this.Seller = null;
    }
    return Product;
}());
exports.Product = Product;
var mainComponent = (function () {
    function mainComponent() {
        this.saved = false;
        this.add = false;
        this.edit = false;
        this.list = true;
        this.lastID = 2;
        this.edDel = false;
        this.Cats = Categories;
        this.Sz = Sizes;
        this.Col = Colors;
        this.product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller' };
        this.oldProduct = { Id: 0, Name: '', Seller: '' };
        this.Catalog = [
            { Id: 0, Name: 'item1', Seller: 'seller1' },
            { Id: 1, Name: 'item2', Seller: 'seller1' },
            { Id: 2, Name: 'item3', Seller: 'seller2' }
        ];
    }
    mainComponent.prototype.addItem = function () {
        this.Catalog.push(this.product);
        this.saved = true;
        this.add = false;
    };
    mainComponent.prototype.inventory = function () {
        this.list = true;
        this.saved = false;
        this.add = false;
        this.edDel = false;
    };
    mainComponent.prototype.selected = function (id) {
        this.product.Id = this.Catalog[id].Id;
        this.product.Name = this.Catalog[id].Name;
        this.product.Description = this.Catalog[id].Description;
        this.product.Price = this.Catalog[id].Price;
        this.product.Quantity = this.Catalog[id].Quantity;
        this.product.Color = this.Catalog[id].Color;
        this.product.Size = this.Catalog[id].Size;
        this.product.Category = this.Catalog[id].Category;
        this.product.Seller = this.Catalog[id].Seller;
        this.edDel = true;
    };
    mainComponent.prototype.toAdd = function () {
        this.list = false;
        this.saved = false;
        this.add = true;
    };
    mainComponent.prototype.toEdit = function () {
        this.list = false;
        this.saved = false;
        this.add = true;
        this.edDel = false;
        this.edit = true;
    };
    mainComponent.prototype.editItem = function () {
        this.Catalog[this.product.Id].Id = this.product.Id;
        this.Catalog[this.product.Id].Name = this.product.Name;
        this.Catalog[this.product.Id].Description = this.product.Description;
        this.Catalog[this.product.Id].Price = this.product.Price;
        this.Catalog[this.product.Id].Quantity = this.product.Quantity;
        this.Catalog[this.product.Id].Color = this.product.Color;
        this.Catalog[this.product.Id].Size = this.product.Size;
        this.Catalog[this.product.Id].Category = this.product.Category;
        this.Catalog[this.product.Id].Seller = this.product.Seller;
        this.saved = true;
        this.add = false;
    };
    mainComponent.prototype.removeItem = function () {
        this.Catalog.splice(this.product.Id, 1);
        this.saved = true;
        this.list = false;
    };
    return mainComponent;
}());
mainComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/components/main.component.html',
    })
], mainComponent);
exports.mainComponent = mainComponent;
//# sourceMappingURL=main.component.js.map