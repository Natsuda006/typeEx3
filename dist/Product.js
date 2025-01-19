"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSupplier() {
        return this.supplier;
    }
    setSupplier(supplier) {
        this.supplier = supplier;
    }
    toString() {
        return `Product [ID: ${this.id}, Name: ${this.name}, Supplier: ${this.supplier}]`;
    }
}
exports.Product = Product;
