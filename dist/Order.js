"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipTo, shipped) {
        this.total = 0;
        this.lineItem = [];
        this.number = number;
        this.ordered = ordered;
        this.shipTo = shipTo;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.shipped = shipped;
    }
    calculateTotel() {
        let totalPrice = 0;
        for (let i = 0; i < this.lineItem.length; i++) {
            totalPrice += this.lineItem[i].getPrice() * this.lineItem[i].getQuantity();
        }
        return totalPrice;
    }
    addLineItem(lineItem) {
        this.lineItem.push(lineItem);
        this.total = this.calculateTotel();
    }
    getNumber() {
        return this.number;
    }
    getOrdered() {
        return this.ordered;
    }
    setOrderedDate(ordered) {
        this.ordered = ordered;
    }
    getShippedDate() {
        return this.shipped;
    }
    setShippedDate(shipped) {
        this.shipped = shipped;
    }
    getShipToAddress() {
        return this.shipTo;
    }
    setShipToAddress(shipTo) {
        this.shipTo = shipTo;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    toString() {
        return `Order [number: ${this.number}, ordered: ${this.ordered}, shipped: ${this.shipped}, shipTo: ${this.shipTo}, status: ${this.status}, total: ${this.total}]`;
    }
}
exports.Order = Order;
