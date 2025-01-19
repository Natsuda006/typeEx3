"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    toString() {
        return `LineItem [quantity: ${this.quantity}, price: ${this.price}, product: ${this.product.toString()}]`;
    }
}
exports.LineItem = LineItem;
