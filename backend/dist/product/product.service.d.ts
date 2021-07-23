import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productId: string): Promise<Product>;
    createProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    deleteProduct(productId: string): Promise<Product>;
    updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<Product>;
}
