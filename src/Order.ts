import { OrderStatus } from './OrderStatus';
import { LineItem } from './LineItem';
export class Order {
    private number: string;
    private ordered: string;
    private shipped: string ; 
    private shipTo: string;
    private status: OrderStatus;
    private total: number=0;
    private lineItem:LineItem[]=[]

    constructor(number: string, ordered: string, shipTo: string, shipped: string ) {
        this.number = number;
        this.ordered = ordered;
        this.shipTo = shipTo;
        this.status = OrderStatus.NEW; 
     this.shipped = shipped; 
    } 

 public calculateTotel():number{
    let totalPrice = 0;
    for(let i = 0; i < this.lineItem.length; i++){
        totalPrice += this.lineItem[i].getPrice()* this.lineItem[i].getQuantity();
    }
    return totalPrice;
 }

 public addLineItem(lineItem: LineItem): void {
    this.lineItem.push(lineItem); 
    this.total = this.calculateTotel(); 
}

    public getNumber(): string {
        return this.number;
    }

    public getOrdered(): string {
        return this.ordered;
    }

    public setOrderedDate(ordered: string): void {
        this.ordered = ordered; 
    }

    public getShippedDate(): string {
        return this.shipped;
    }

    public setShippedDate(shipped: string): void {
        this.shipped = shipped; 
    }

    public getShipToAddress(): string {
        return this.shipTo;
    }

    public setShipToAddress(shipTo: string): void {
        this.shipTo = shipTo; 
    }

    public getStatus(): OrderStatus {
        return this.status;
    }

    public setStatus(status: OrderStatus): void {
        this.status = status; 
    }

    public getTotal(): number {
        return this.total;
    }

    public setTotal(total: number): void {
        this.total = total;
    }

    public toString(): string {
        return `Order [number: ${this.number}, ordered: ${this.ordered}, shipped: ${this.shipped}, shipTo: ${this.shipTo}, status: ${this.status}, total: ${this.total}]`;
    }
}
