import { Component } from '@angular/core';
import { inventoryService } from '../service/inventory.service';

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


@Component({
    selector: 'inventory',
    templateUrl:'app/components/inventory.component.html',
})
export class inventoryComponent {

    constructor(private service: inventoryService) { }

    saved: boolean = false;
    add: boolean = false;
    edit: boolean = false;
    list: boolean = true;
    lastID: number = 2;
    edDel: boolean = false;
    try: boolean = false;

    test: Product[] = [];

    Colors: string[] = ['Black', 'White', 'Gray', 'Purple'];
    Sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
    Categories: string[] = ['', 'Shirt', 'Hoodie', 'Hat'];
    Fits: string[] = ['Men', 'Women'];

    product: Product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller', Color: [], Size: [], Fit: [] };
    oldProduct: Product = { Id: -1, Name: '', Seller: '' };

    Catalog: Product[] = [
        { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 25, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1' },
        { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'White'], Quantity: 25, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1' },
        { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 25, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1' }
    ];

    public addItem() {
        this.Catalog.push(this.product);
        this.saved = true;
        this.add = false;
    }

    public inventory() {
        this.list = true;
        this.saved = false;
        this.add = false;
        this.edDel = false;
        this.edit = false;

    }

    public selected(id: number) {
        console.log(this.service.Catalog);

        this.product.Id = this.Catalog[id].Id;
        this.product.Name = this.Catalog[id].Name;
        this.product.Description = this.Catalog[id].Description;
        this.product.Price = this.Catalog[id].Price;
        this.product.Quantity = this.Catalog[id].Quantity;
        this.product.Color = this.Catalog[id].Color;
        this.product.Size = this.Catalog[id].Size;
        this.product.Category = this.Catalog[id].Category;
        this.product.Seller = this.Catalog[id].Seller;
        this.product.Fit = this.Catalog[id].Fit;

        this.edDel = true;
    }

    public toAdd() {
        this.product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller', Color: [], Size: [], Fit: [] };
        this.list = false;
        this.saved = false;
        this.add = true;
    }

    public check(value: string, type: string) {
        if (type == 'size') {
            if (this.product.Size.indexOf(value) == -1)
                this.product.Size.push(value);
        }
        else if (type == 'color') {
            if (this.product.Color.indexOf(value) == -1)
                this.product.Color.push(value);
        }
        else if (type == 'fit') {
            if (this.product.Fit.indexOf(value) == -1)
                this.product.Fit.push(value);
        }
    }

    public checked(value: string, type: string) {
        if (type == 'size') {
            if (this.product.Size.indexOf(value) == -1)
                return false;
        }
        else if (type == 'color') {
            if (this.product.Color.indexOf(value) == -1)
                return false;
        }
        else if (type == 'fit') {
            if (this.product.Fit.indexOf(value) == -1)
                return false;
        }

        return true;
    }

    public uncheck(value: string, type: string) {
        var i = 0;
        if (type == 'size') {
            this.product.Size.splice(this.product.Size.indexOf(value), 1);
        }
        else if (type == 'color') {
            this.product.Color.splice(this.product.Color.indexOf(value), 1);
        }
        else if (type == 'fit') {
            this.product.Fit.splice(this.product.Fit.indexOf(value), 1);
        }
    }

    public toEdit() {
        this.list = false;
        this.saved = false;
        this.add = true;
        this.edDel = false;
        this.edit = true;
    }

    public editItem() {
        this.Catalog[this.product.Id].Id = this.product.Id;
        this.Catalog[this.product.Id].Name = this.product.Name;
        this.Catalog[this.product.Id].Description = this.product.Description;
        this.Catalog[this.product.Id].Price = this.product.Price;
        this.Catalog[this.product.Id].Quantity = this.product.Quantity;
        this.Catalog[this.product.Id].Color = this.product.Color;
        this.Catalog[this.product.Id].Size = this.product.Size;
        this.Catalog[this.product.Id].Category = this.product.Category;
        this.Catalog[this.product.Id].Seller = this.product.Seller;
        this.Catalog[this.product.Id].Fit = this.product.Fit;
        this.saved = true;
        this.add = false;

        this.service.setData(this.test);
    }

    public removeItem() {
        this.Catalog.splice(this.product.Id, 1);
        this.saved = true;
        this.list = false;
    }
}
