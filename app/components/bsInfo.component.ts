import { Component } from '@angular/core';
import { cartService } from '../service/cart.service';


export class BSInfo {
    FirstName: string = null;
    LastName: string = null;
    Address1: string = null;
    Address2: string = null;
    City: string = null;
    StateProv: string = null;
    ZipCode: number = null;
    Country: string = null;
    PhoneNumber: number = null;
    Email?: string = null;
}

export class Card {
    CardType: string = null;
    CardNumber: number = null;
    ExpirationDate: Date = null;
    SecurityCode: number = null;
    PromotionCode: number = null;
}

@Component({
    selector: 'bsinfo',
    templateUrl: 'app/components/bsInfo.component.html',
})

export class bsInfoComponent {
    constructor(public cart: cartService) {

    }

    isSent: boolean = false;
    title: string = 'SHIPPING ADDRESS';
    info: BSInfo = new BSInfo();
    oldInfo: BSInfo = new BSInfo();
    bInfo: BSInfo = this.info;
    oldbInfo: BSInfo = new BSInfo();
    card: Card = new Card;
    oldCard: Card = new Card;
    activeTab: string = 'sa';
    checked: boolean = true;
    options: string[] = ['firstname', 'lastname', 'address1', 'city', 'stateprov', 'country', 'zipcode', 'phonenum', 'email', 'type', 'num', 'date', 'code'];
    clickProc: boolean = false;
    cardTypes: string[] = ["VISA", "Master", "Disco", "Amex"];

    public proceed(tab: string) {
        var stop = false;
        this.clickProc = true;
        for (var i = 0; i < this.options.length; i++){
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
    }

    public typeClick(type: string) {
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
    }

    public missing(type: string) {
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
    }

    public cardEdit(type: string) {
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
    }

    public shippingEdit(type: string) {
        if (type == 'firstname' ){
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
    }

    public check(bool:boolean) {
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
    }

    public uncheck(bool:boolean) {
        this.bInfo = new BSInfo();
        this.bInfo.Email = "blank";
        console.log(this.bInfo.FirstName);
        this.checked = bool;
    }

    public sent() {
        this.cart.cartItems.splice(0, this.cart.cartItems.length);
        this.isSent = true;
    }

    public edit() {
        this.activeTab = 'sa';
    }

    public cost() {
        var cost = 0;
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            cost += this.cart.cartItems[i].Price * this.cart.cartItems[i].Quantity;
        }
        return Math.round(cost * 100) / 100;
    }

    public tax() {
        var tax = this.cost() * 0.0825;
        return Math.round(tax * 100) / 100;
    }

    public total() {
        return this.cost() + this.tax() + 7;
    }

    public priceNum(num: number) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    }
}

