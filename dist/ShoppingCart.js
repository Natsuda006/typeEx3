"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor(createdDate) {
        this.lineItems = [];
        this.createdDate = createdDate;
    }
    getCreatedDate() {
        return this.createdDate;
    }
    addLineItem(lineItem) {
        this.lineItems.push(lineItem);
    }
    getLineItems() {
        return this.lineItems;
    }
    toString() {
        const lineItemDetails = this.lineItems
            .map((item, index) => `${index + 1}. ${item.getProduct().getName()} - Quantity: ${item.getQuantity()}, Unit Price: ${item.getPrice()}, Total: ${item.getPrice() * item.getQuantity()}`)
            .join("\n");
        return `ShoppingCart [createdDate: ${this.createdDate.toISOString()}, totalItems: ${this.lineItems.length}]\nLineItems:\n${lineItemDetails}`;
    }
}
exports.ShoppingCart = ShoppingCart;
