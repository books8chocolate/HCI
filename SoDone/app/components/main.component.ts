import { Component } from '@angular/core';

enum Colors { Black, White, Red, Orange, Yellow, Green, Blue, Purple, Brown };
enum Sizes { XS, S, M, L, XL };
enum Categories { Shirt, Hoodie, Hat };

export class Product {
    Id: number = null;
    Name: string = null;
    Category?: string = null;
    //Category?: Categories = null;
    Price?: number = null;
    Size?: string = null;
    //Size?: Sizes[] = null;
    Color?: string = null;
    //Color?: Colors[] = null;
    Quantity?: number = null;
    Description?: string = null;
    Seller: string = null;
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/main.component.html',
})
export class mainComponent  {
    saved: boolean = false;
    add: boolean = false;
    edit: boolean = false;
    list: boolean = true;
    lastID: number = 2;
    edDel: boolean = false;

    Cats: any = Categories;
    Sz: any = Sizes;
    Col: any = Colors;

    product: Product = { Id: this.lastID + 1, Name: '', Seller: 'testSeller' };
    oldProduct: Product = { Id: 0, Name: '', Seller: '' };

    Catalog: Product[] = [
        { Id: 0, Name: 'item1', Seller: 'seller1' },
        { Id: 1, Name: 'item2', Seller: 'seller1' },
        { Id: 2, Name: 'item3', Seller: 'seller2' }
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

    }

    public selected(id:number) {
        this.product.Id = this.Catalog[id].Id;
        this.product.Name = this.Catalog[id].Name;
        this.product.Description = this.Catalog[id].Description;
        this.product.Price = this.Catalog[id].Price;
        this.product.Quantity = this.Catalog[id].Quantity;
        this.product.Color = this.Catalog[id].Color;
        this.product.Size = this.Catalog[id].Size;
        this.product.Category = this.Catalog[id].Category;
        this.product.Seller = this.Catalog[id].Seller;

        this.edDel = true;
    }

    public toAdd() {
        this.list = false;
        this.saved = false;
        this.add = true;
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
        this.saved = true;
        this.add = false;
    }

    public removeItem() {
        this.Catalog.splice(this.product.Id, 1);
        this.saved = true;
        this.list = false;
    }
}
