import { Client } from "./Client";
export class Order {
    idOrder?
    client: Client;
    productList;
    total;
}