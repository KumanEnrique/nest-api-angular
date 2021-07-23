export interface Product {
    _id?:string
    name:string;
    description:string;
    imageURL:string;
    price:number;
    createdAt?:Date;
}