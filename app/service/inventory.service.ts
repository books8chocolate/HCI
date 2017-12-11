import { Injectable } from '@angular/core';

export class Product {
    pic?: string = null;
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
export class inventoryService {
    Catalog: Product[] = [
        { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 25, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'bHoodie.jpg' },
        { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Purple'], Quantity: 25, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1', pic: 'pHat.jpg' },
        { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 25, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1', pic: 'pShirt.jpg' }
    ];
}