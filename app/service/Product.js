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
    }
    return Product;
}());
Product = __decorate([
    core_1.Injectable()
], Product);
exports.Product = Product;
//# sourceMappingURL=Product.js.map