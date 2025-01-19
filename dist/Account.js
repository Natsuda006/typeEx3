"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billingAddress, isClosed = false, open, closed) {
        this.id = id;
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.open = open;
        this.closed = closed;
    }
    getId() {
        return this.id;
    }
    getBillingAddress() {
        return this.billingAddress;
    }
    isAccountClosed() {
        return this.isClosed;
    }
    getOpenDate() {
        return this.open;
    }
    getClosedDate() {
        return this.closed;
    }
    setBillingAddress(newAddress) {
        if (this.isClosed) {
            throw new Error("Cannot update address of a closed account.");
        }
        this.billingAddress = newAddress;
    }
    closeAccount() {
        if (!this.isClosed) {
            this.isClosed = true;
            this.closed = new Date();
        }
        else {
            throw new Error("Account is already closed.");
        }
    }
    toString() {
        return `Account [id: ${this.id}, billingAddress: ${this.billingAddress}, isClosed: ${this.isClosed}, open: ${this.open}, closed: ${this.closed}]`;
    }
}
exports.Account = Account;
