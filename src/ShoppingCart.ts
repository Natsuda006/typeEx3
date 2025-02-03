import { LineItem } from "./LineItem";

export class ShoppingCart {
  private created: string;
  private lineItems: LineItem[] = [];

  constructor(created: string) {
    this.created = created;

  }

  public getCreated(): string {
    return this.created;
  }

  public addLineItem(lineItem: LineItem): void {
    this.lineItems.push(lineItem);
  }

  public getLineItems(): LineItem[] {
    return this.lineItems;
  }

  public toString(): string {
   return `ShoppingCart [created: ${this.created}, lineItems: ${this.lineItems}`;
  }
}
