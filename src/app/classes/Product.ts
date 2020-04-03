export class Product {
    idProduct?;
    title?;
    code?
    idCompany?
    amount?;
    text?
    price?;
    picture?;

    constructor(code?,title?,price?,amount?,text?,picture?,idCompany?){
        this.code = code;
        this.title = title;
        this.price = price;
        this.amount = amount;
        this.text = text;
        this.picture = picture;
        this.idCompany = idCompany;
    }
}
