import { Injectable } from '@angular/core';

enum Colors { Black, White, Red, Orange, Yellow, Green, Blue, Purple, Brown };
enum Sizes { XS, S, M, L, XL };
enum Categories { Shirt, Hoodie, Hat };

@Injectable()
export class Product {
    Id: number;
    Name: string;
    Category: Categories;
    Price: number;
    Size: Sizes[];
    Color: Colors[];
    Quantity: number;
    Description: string;
    Seller: string;
}