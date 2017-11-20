import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { cartService } from '../service/cart.service';

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
export class homeComponent {
    constructor(public cart: cartService, public router:Router) { }

    Catalog: Product[] = [
        { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 0, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bHoodie.jpg'},
        { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'White'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'pHat.jpg' },
        { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 1, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'pShirt.jpg' },
        { Id: 3, Name: 'item4', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['White'], Quantity: 1, Description: 'A White Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'wHoodie.jpg' },
        { Id: 4, Name: 'item4', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'Purple'], Quantity: 1, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'bCap.jpg' },
        { Id: 5, Name: 'item6', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 1, Description: 'A Black T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bShirt.jpg' }
    ];

    queryString: string;
    newItems: boolean = false;

    public productCart(num: number) {
        this.cart.cartItems.push(this.Catalog[num]);
        this.newItems = true;
        console.log(this.cart.cartItems);
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