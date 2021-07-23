import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createProduct(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    getProducts(res: any): Promise<any>;
    GetProduct(res: any, param: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
    updateProduct(res: any, createProductDTO: CreateProductDTO, productID: any): Promise<any>;
}
