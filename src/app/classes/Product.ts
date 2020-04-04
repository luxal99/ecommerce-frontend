export class Product {
    idProduct?;
    title?;
    amount?;
    text?
    price?;
    picture?;
    orderAmount?
    idCompany?
    code?

    constructor(code?,title?,price?,amount?,text?,picture?,idCompany?){
        this.code = code;
        this.title = title;
        this.price = price;
        this.amount = amount;
        this.text = text;
        this.picture = picture;
        this.idCompany = idCompany;
        this.orderAmount = 1;
    }
}

export class ProductOrder {
    product: Product;
    orderAmount;

    constructor(){
        this.orderAmount = 1
    }
}