import { Component } from '@angular/core';
import { cartService } from '../service/cart.service';
import { Router } from '@angular/router';

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
    selector: 'cart',
    templateUrl: 'app/components/cart.component.html',
})
export class cartComponent {
    constructor(public cart: cartService, public router: Router) { }

    public delete(num: number) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                this.cart.cartItems.splice(i, 1);
            }
        }
    }

    public count() {
        var num = 0;
        for (var i = 0; i < this.cart.cartItems.length; i++){
            num += this.cart.cartItems[i].Quantity;
        }
        return num;
    }

    public inc(num: number) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                this.cart.cartItems[i].Quantity++;
            }
        }
    }

    public dec(num: number) {
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            if (this.cart.cartItems[i].Id == num) {
                if(this.cart.cartItems[i].Quantity != 0)
                    this.cart.cartItems[i].Quantity--;
                if (this.cart.cartItems[i].Quantity == 0) {
                    this.delete(num);
                }
            }
        }
    }

    public proctoCheck() {
        this.router.navigateByUrl('/bsInfo');
    }

    public home() {
        this.router.navigateByUrl('/Home');
    }

    public priceNum(num: number) {
        if (num % 1 == 0) {
            return "$" + num + ".00";
        }
        else
            return "$" + num;
    }

    public cost() {
        var cost = 0;
        for (var i = 0; i < this.cart.cartItems.length; i++) {
            cost += this.cart.cartItems[i].Price * this.cart.cartItems[i].Quantity;
        }
        return cost;
    }


}

