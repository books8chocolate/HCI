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
var BSInfo = (function () {
    function BSInfo() {
        this.FirstName = null;
        this.LastName = null;
        this.Address1 = null;
        this.Address2 = null;
        this.City = null;
        this.StateProv = null;
        this.ZipCode = null;
        this.Country = null;
        this.PhoneNumber = null;
        this.Email = null;
    }
    return BSInfo;
}());
exports.BSInfo = BSInfo;
var Card = (function () {
    function Card() {
        this.CardType = null;
        this.CardNumber = null;
        this.ExpirationDate = null;
        this.SecurityCode = null;
        this.PromotionCode = null;
    }
    return Card;
}());
exports.Card = Card;
var bsInfoComponent = (function () {
    function bsInfoComponent(cart, router) {
        this.cart = cart;
        this.router = router;
        this.isSent = false;
        this.title = 'SHIPPING ADDRESS';
        this.info = new BSInfo();
        this.oldInfo = new BSInfo();
        this.bInfo = this.info;
        this.oldbInfo = new BSInfo();
        this.card = new Card;
        this.oldCard = new Card;
        this.activeTab = 'sa';
        this.checked = true;
        this.options = ['firstname', 'lastname', 'address1', 'city', 'stateprov', 'country', 'zipcode', 'phonenum', 'email', 'type', 'num', 'date', 'code'];
        this.clickProc = false;
        this.cardTypes = ["VISA", "Master", "Disco", "Amex"];
    }
    bsInfoComponent.prototype.proceed = function (tab) {
        var stop = false;
        this.clickProc = true;
        for (var i = 0; i < this.options.length; i++) {
            if (this.missing(this.options[i])) {
                stop = true;
            }
        }
        if (stop == false) {
            this.activeTab = tab;
            this.clickProc = false;
            if (this.activeTab == 'pi') {
                this.title = 'PAYMENT INFO';
            }
            else if (this.activeTab == 'co') {
                this.title = 'CONFIRM ORDER';
            }
        }
    };
    bsInfoComponent.prototype.typeClick = function (type) {
        this.oldCard.CardType = this.card.CardType;
        if (type == 'visa') {
            this.card.CardType = "VISA";
        }
        else if (type == 'master') {
            this.card.CardType = "Master";
        }
        else if (type == 'disco') {
            this.card.CardType = "Disco";
        }
        else if (type == 'amex') {
            this.card.CardType = "Amex";
        }
    };
    bsInfoComponent.prototype.missing = function (type) {
        if (this.clickProc) {
            if (type == 'firstname') {
                if (this.info.FirstName == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.FirstName == null) {
                        return true;
                    }
                }
            }
            else if (type == 'lastname') {
                if (this.info.LastName == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.LastName == null) {
                        return true;
                    }
                }
            }
            else if (type == 'address1') {
                if (this.info.Address1 == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.Address1 == null) {
                        return true;
                    }
                }
            }
            else if (type == 'city') {
                if (this.info.City == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.City == null) {
                        return true;
                    }
                }
            }
            else if (type == 'stateprov') {
                if (this.info.StateProv == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.StateProv == null) {
                        return true;
                    }
                }
            }
            else if (type == 'zipcode') {
                if (this.info.ZipCode == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.ZipCode == null) {
                        return true;
                    }
                }
            }
            else if (type == 'country') {
                if (this.info.Country == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.Country == null) {
                        return true;
                    }
                }
            }
            else if (type == 'phonenum') {
                if (this.info.PhoneNumber == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.PhoneNumber == null) {
                        return true;
                    }
                }
            }
            else if (type == 'email') {
                if (this.info.Email == null) {
                    return true;
                }
                if (this.activeTab == 'pi') {
                    if (this.bInfo.Email == null) {
                        return true;
                    }
                }
            }
            if (this.activeTab == 'pi') {
                if (type == 'type') {
                    if (this.card.CardType == null) {
                        return true;
                    }
                }
                else if (type == 'num') {
                    if (this.card.CardNumber == null) {
                        return true;
                    }
                }
                else if (type == 'date') {
                    if (this.card.ExpirationDate == null) {
                        return true;
                    }
                }
                else if (type == 'code') {
                    if (this.card.SecurityCode == null) {
                        return true;
                    }
                }
            }
            else
                return false;
        }
    };
    bsInfoComponent.prototype.cardEdit = function (type) {
        if (type == 'type') {
            this.oldCard.CardType = this.card.CardType;
        }
        else if (type == 'num') {
            this.oldCard.CardNumber = this.card.CardNumber;
        }
        else if (type == 'date') {
            this.oldCard.ExpirationDate = this.card.ExpirationDate;
        }
        else if (type == 'code') {
            this.oldCard.SecurityCode = this.card.SecurityCode;
        }
        else if (type == 'promo') {
            this.oldCard.PromotionCode = this.card.PromotionCode;
        }
    };
    bsInfoComponent.prototype.shippingEdit = function (type) {
        if (type == 'firstname') {
            this.oldInfo.FirstName = this.info.FirstName;
        }
        else if (type == 'lastname') {
            this.oldInfo.LastName = this.info.LastName;
        }
        else if (type == 'address1') {
            this.oldInfo.Address1 = this.info.Address1;
        }
        else if (type == 'address2') {
            this.oldInfo.Address2 = this.info.Address2;
        }
        else if (type == 'city') {
            this.oldInfo.City = this.info.City;
        }
        else if (type == 'stateprov') {
            this.oldInfo.StateProv = this.info.StateProv;
        }
        else if (type == 'zipcode') {
            this.oldInfo.ZipCode = this.info.ZipCode;
        }
        else if (type == 'country') {
            this.oldInfo.Country = this.info.Country;
        }
        else if (type == 'phonenum') {
            this.oldInfo.PhoneNumber = this.info.PhoneNumber;
        }
        else if (type == 'email') {
            this.oldInfo.Email = this.info.Email;
        }
        console.log(this.oldInfo);
    };
    bsInfoComponent.prototype.check = function (bool) {
        this.bInfo.Address1 = this.info.Address1;
        this.bInfo.Address2 = this.info.Address2;
        this.bInfo.City = this.info.City;
        this.bInfo.Country = this.info.Country;
        this.bInfo.Email = this.info.Email;
        this.bInfo.FirstName = this.info.FirstName;
        this.bInfo.LastName = this.info.LastName;
        this.bInfo.PhoneNumber = this.info.PhoneNumber;
        this.bInfo.StateProv = this.info.StateProv;
        this.bInfo.ZipCode = this.info.ZipCode;
        console.log(this.bInfo.FirstName);
        this.checked = bool;
    };
    bsInfoComponent.prototype.pageCart = function () {
        this.router.navigateByUrl('/Cart');
    };
    bsInfoComponent.prototype.uncheck = function (bool) {
        this.bInfo = new BSInfo();
        this.bInfo.Email = "blank";
        console.log(this.bInfo.FirstName);
        this.checked = bool;
    };
    bsInfoComponent.prototype.sent = function () {
        this.cart.cartItems.splice(0, this.cart.cartItems.length);
        this.isSent = true;
    };
    bsInfoComponent.prototype.edit = function () {
        this.activeTab = 'sa';
    };
    bsInfoComponent.prototype.cost = function () {
        var cost = 0;
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            cost += this.cart.cartItems[i].Price * this.cart.cartItems[i].Quantity;
        }
        return Math.round(cost * 100) / 100;
    };
    bsInfoComponent.prototype.tax = function () {
        var tax = this.cost() * 0.0825;
        return Math.round(tax * 100) / 100;
    };
    bsInfoComponent.prototype.total = function () {
        return this.cost() + this.tax() + 7;
    };
    bsInfoComponent.prototype.priceNum = function (num) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    };
    return bsInfoComponent;
}());
bsInfoComponent = __decorate([
    core_1.Component({
        selector: 'bsinfo',
        templateUrl: 'app/components/bsInfo.component.html',
    }),
    __metadata("design:paramtypes", [cart_service_1.cartService, router_1.Router])
], bsInfoComponent);
exports.bsInfoComponent = bsInfoComponent;
//# sourceMappingURL=bsInfo.component.js.map