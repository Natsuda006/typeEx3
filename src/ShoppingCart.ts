import { LineItem } from "./LineItem";

export class ShoppingCart {
  private createdDate: Date;
  private lineItems: LineItem[] = [];

  constructor(createdDate: Date) {
    this.createdDate = createdDate;
  }

  public getCreatedDate(): Date {
    return this.createdDate;
  }

  public addLineItem(lineItem: LineItem): void {
    this.lineItems.push(lineItem);
  }

  public getLineItems(): LineItem[] {
    return this.lineItems;
  }

  public toString(): string {
    const lineItemDetails = this.lineItems
      .map((item, index) => 
        `${index + 1}. ${item.getProduct().getName()} - Quantity: ${item.getQuantity()}, Unit Price: ${item.getPrice()}, Total: ${item.getPrice() * item.getQuantity()}`
      )
      .join("\n");

    return `ShoppingCart [createdDate: ${this.createdDate.toISOString()}, totalItems: ${this.lineItems.length}]\nLineItems:\n${lineItemDetails}`;
  }
}
