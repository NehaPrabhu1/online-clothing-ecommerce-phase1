import { size_quantity } from "./size_quantity";

export interface Product {
    productid: number,
    categoryid: number,
    brandid: number,
    product_name: string,
    size_quantity: size_quantity,
    price: number,
    color: string,
    discount: number,
    product_image: string
}