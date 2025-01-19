import { WebUser } from "./WebUser";
import { UserState } from "./UserState";
import { Customer } from './Customer';
import { Product } from './Product';
import { Order } from "./Order";
import { LineItem } from './LineItem';
import { ShoppingCart } from './ShoppingCart';
import { Payment } from './Payment';
import {Account}  from "./Account";

console.log("############## User ##############");
const user1 = new WebUser("U001", "123123");
const user2 = new WebUser("U002", "456456");
const user3 = new WebUser("U003", "789789");
user1.setState(UserState.ACTIVE);
user2.setState(UserState.ACTIVE);
user3.setState(UserState.ACTIVE);
console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());
console.log("############################");

console.log("############## Customer ##############");
const customer1 = new Customer(user1, "C015", "Natsuda", "0952437049", "Natsuda@gmail.com");
console.log(customer1.toString());
console.log("############################");

console.log("############## Account ##############");
const account1 = new Account("A001", "123 Main St.", false, new Date());
const account2 = new Account("A002", "456 Elm St.", false, new Date());

// อัปเดตที่อยู่ของบัญชี
account1.setBillingAddress("789 Oak St.");
console.log(account1.toString());
console.log(account2.toString());

// ปิดบัญชี
account2.closeAccount();
console.log("Account 2 closed:", account2.toString());
console.log("############################");


console.log("############################");

console.log("############## Product ##############");
const product1 = new Product("P001", "Lay", "All Thailand Transport");
const product2 = new Product("P002", "Notebook", "Office Supply Co.");
const product3 = new Product("P003", "Marker", "Stationery World");
const product4 = new Product("P004", "Eraser", "Stationery Supplier");
const product5 = new Product("P005", "Ruler", "Stationery Supplier");
const product6 = new Product("P001", "Pen", "Stationery Supplier");

console.log(product1.toString());
console.log(product2.toString());
console.log(product3.toString());
console.log(product4.toString());
console.log(product5.toString());
console.log(product6.toString());
console.log("############################");

console.log("############## LineItem ##############");
const lineItem1 = new LineItem(2, 10, product1);
const lineItem2 = new LineItem(3, 15, product2);
const lineItem3 = new LineItem(1, 20, product3);
console.log(lineItem1.toString());
console.log(lineItem2.toString());
console.log(lineItem3.toString());
console.log("############################");

//(สำหรับ user1)
console.log("############## ShoppingCart ##############");
const shoppingCart1 = new ShoppingCart(new Date());
shoppingCart1.addLineItem(lineItem1);
shoppingCart1.addLineItem(lineItem2);
shoppingCart1.addLineItem(lineItem3);
console.log(shoppingCart1.toString());
console.log("############################");

//(สำหรับ user2)
const  shoppingcart2 = new ShoppingCart(new Date());
shoppingcart2.addLineItem(new LineItem(5, 8, product2)); 
shoppingcart2.addLineItem(new LineItem(1, 15, product5)); 
console.log( shoppingcart2.toString());
console.log("############################");

// คำสั่งซื้อ (สำหรับ user1)
console.log("############## Order ##############");
const order1 = new Order( "O001",  new Date().toString(),  "56 Chaiya ",             
    new Date().toISOString()   );
order1.addLineItem(lineItem1);
order1.addLineItem(lineItem2);
console.log(order1.toString());
console.log("############################");

// คำสั่งซื้อ (สำหรับ user2)
const order2 = new Order("O002", new Date().toISOString(), "456 Chaiya ", new Date().toISOString());
order2.addLineItem(new LineItem(5, 8, product2));
order2.addLineItem(new LineItem(1, 15, product5));
console.log(order2.toString());
console.log("############################");

console.log("############## Payment ##############");
const payment1 = new Payment("PAY001", new Date(), 500, "Credit Card");
const payment2 = new Payment("PAY002", new Date(), 1500, "Cash");
console.log(payment1.toString());
console.log(payment2.toString());
console.log("############################");
