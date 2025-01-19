import { Product } from "./Product";
export class LineItem {
    private quantity: number;
    private price: number;
    private product: Product;

    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }

    public getQuantity ():number{
        return this.quantity
    }

    public setQuantity(quantity: number):void{
        this.quantity = quantity
    }

    public getPrice():number{
        return this.price
    }

    public setPrice(price:number):void{
        this.price = price
    }

    public getProduct():Product{
                return this.product
    }

    public setProduct(product:Product):void{
        this.product = product
    }

    public toString(): string {
        return `LineItem [quantity: ${this.quantity}, price: ${this.price}, product: ${this.product.toString()}]`;
    }
}