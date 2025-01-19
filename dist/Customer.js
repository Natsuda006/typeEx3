"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(webUser, id, address, phone, email) {
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    getID() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Customer [ID: ${this.id}, address: ${this.address}, phone: ${this.phone}, email: ${this.email}, ${this.webUser.toString()}]`;
    }
}
exports.Customer = Customer;
