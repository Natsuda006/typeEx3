export class Payment {
  private id: string;
  private paidDate: Date;
  private total: number;
  private details: string;

  constructor(id: string, paidDate: Date, total: number, details: string) {
    this.id = id;
    this.paidDate = paidDate;
    this.total = total;
    this.details = details;
  }

  public getId(): string {
    return this.id;
  }

  public getPaidDate(): Date {
    return this.paidDate;
  }

  public getTotal(): number {
    return this.total;
  }

  public getDetails(): string {
    return this.details;
  }

  public toString(): string {
    return `Payment [id: ${this.id}, total: ${this.total}, details: ${this.details}]`;
  }
}
