﻿import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { cartService } from '../service/cart.service';
import { inventoryService } from '../service/inventory.service';

export class Product {
    Id: number = null;
    pic?: string = null;
    Name: string = null;
    Category?: string = null;
    Price?: number = null;
    Size?: string[] = [];
    Color?: string[] = [];
    Quantity?: number = null;
    Description?: string = null;
    Seller: string = null;
    Fit?: string[] = [];
}


@Component({
    selector: 'home',
    templateUrl: 'app/components/home.component.html',
})
export class homeComponent implements OnInit {

    constructor(public cart: cartService, public router: Router, public service: inventoryService) { }

    Catalog: Product[] = [
        { Id: 66, Name: 'item4', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['White'], Quantity: 1, Description: 'A White Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'wHoodie.jpg' },
        { Id: 77, Name: 'item4', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'bCap.jpg' },
        { Id: 88, Name: 'item6', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 1, Description: 'A Black T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bShirt.jpg' }
    ];
    filteredCatalog: Product[] = [];
    queryString: string;
    newItems: boolean = false;
    checkedVal: string[] = [];
    insert: Product;

    ngOnInit(): void {
        for (var j = 0; j < this.service.Catalog.length; j++) {
            this.insert = {
                Id: this.service.Catalog[j].Id, Name: this.service.Catalog[j].Name, Category: this.service.Catalog[j].Category, Price: this.service.Catalog[j].Price,
                Size: this.service.Catalog[j].Size, Color: this.service.Catalog[j].Color, Quantity: 1, Description: this.service.Catalog[j].Description, Fit: this.service.Catalog[j].Fit,
                Seller: this.service.Catalog[j].Seller, pic: this.service.Catalog[j].pic
            }
            this.Catalog.push(this.insert);
        }
        for (var i = 0; i < this.Catalog.length; i++) {
            this.filteredCatalog.push(this.Catalog[i]);
        }
    }

    public search() {
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
    }

    public check(val: string) {
        this.checkedVal.push(val); //push new val check into array
        this.filteredCatalog = [];

        for (var j = 0; j < this.checkedVal.length; j++) { //for each val check
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

    }

    public uncheck(val: string) {
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
    }


    public productCart(num: number) {
        var item;
        for (var i = 0; i < this.Catalog.length; i++){
            if (this.Catalog[i].Id == num) {
                item = this.Catalog[i];
                break;
            }
        }
        this.cart.cartItems.push(item);
        this.newItems = true;
    }

    public pageCart() {
        this.newItems = false;
        this.router.navigateByUrl('/Cart');
    }

    public priceNum(num: number) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    }

    public inCart(num: number) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                return true;
            }
        }
        return false;
    }
}