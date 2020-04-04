export class Product {
    idProduct?;
    title?;
    amount?;
    description?
    price?;
    image?;
}

export class ProductOrder {
    product: Product;
    orderAmount;
}