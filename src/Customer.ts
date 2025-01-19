import { WebUser } from './WebUser';

export class Customer {
    private webUser: WebUser;
    private id: string;
    private address: string;
    private phone: string;
    private email: string;

    constructor(webUser: WebUser, id: string, address: string, phone: string, email: string) {
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    public getID(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public toString(): string {
        return `Customer [ID: ${this.id}, address: ${this.address}, phone: ${this.phone}, email: ${this.email}, ${this.webUser.toString()}]`;
    }
}
