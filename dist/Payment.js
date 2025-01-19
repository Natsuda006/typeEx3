"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(id, paidDate, total, details) {
        this.id = id;
        this.paidDate = paidDate;
        this.total = total;
        this.details = details;
    }
    getId() {
        return this.id;
    }
    getPaidDate() {
        return this.paidDate;
    }
    getTotal() {
        return this.total;
    }
    getDetails() {
        return this.details;
    }
    toString() {
        return `Payment [id: ${this.id}, total: ${this.total}, details: ${this.details}]`;
    }
}
exports.Payment = Payment;
