import { Injectable } from '@angular/core';

export class Product {
    Id: number = null;
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

@Injectable()
export class cartService {
    cartItems: Product[] = [];
}