export class Account {
    private id: string;
    private billingAddress: string;
    private isClosed: boolean;
    private open: Date;
    private closed?: Date;

    constructor(id: string, billingAddress: string, isClosed: boolean = false, open: Date, closed?: Date) {
        this.id = id;
        this.billingAddress = billingAddress;
        this.isClosed = isClosed;
        this.open = open;
        this.closed = closed;
    }

    public getId(): string {
        return this.id;
    }

    public getBillingAddress(): string {
        return this.billingAddress;
    }

    public isAccountClosed(): boolean {
        return this.isClosed;
    }

    public getOpenDate(): Date {
        return this.open;
    }

    public getClosedDate(): Date | undefined {
        return this.closed;
    }


    public setBillingAddress(newAddress: string): void {
        if (this.isClosed) {
            throw new Error("Cannot update address of a closed account.");
        }
        this.billingAddress = newAddress;
    }


    public closeAccount(): void {
        if (!this.isClosed) {
            this.isClosed = true;
            this.closed = new Date();
        } else {
            throw new Error("Account is already closed.");
        }
    }

    public toString(): string {
        return `Account [id: ${this.id}, billingAddress: ${this.billingAddress}, isClosed: ${this.isClosed}, open: ${this.open}, closed: ${this.closed}]`;
    }
}
