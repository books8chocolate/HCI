import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

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

export class inventoryService {
    Catalog: Product[] = [
        { Id: 0, Name: 'item1', Category: 'Hoodie', Price: 25.00, Size: ['S', 'M', 'L'], Color: ['Black'], Quantity: 25, Description: 'A Black Hoodie', Fit: ['Men', 'Women'], Seller: 'seller1' },
        { Id: 1, Name: 'item2', Category: 'Hat', Price: 20.00, Size: [], Color: ['Black', 'Gray', 'White'], Quantity: 25, Description: 'A Baseball Cap', Fit: [], Seller: 'seller1' },
        { Id: 2, Name: 'item3', Category: 'Shirt', Price: 15.00, Size: ['S', 'M', 'L'], Color: ['Purple'], Quantity: 25, Description: 'A Purple T-Shirt', Fit: ['Men', 'Women'], Seller: 'seller1' }
    ];

    dataChange: Observable<Product[]>;

    dataChangeObserver: Observer<Product[]>;

    constructor() {
        this.dataChange = new Observable((observer: Observer<Product[]>) =>{
            this.dataChangeObserver = observer;
        });
    }

    setData(data: Product[]) {
        this.Catalog = data;
        this.dataChangeObserver.next(this.Catalog);
    }
}