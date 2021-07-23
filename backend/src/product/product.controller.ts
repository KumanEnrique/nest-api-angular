import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body,Param,NotFoundException,Query} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService:ProductService){}

    @Post('/create')
    async createProduct(@Res() res,@Body() createProductDTO:CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO)
        // console.log(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message:"Received",
            product
        })
    }
    @Get('/')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts()
        return res.status(HttpStatus.OK).json(products)
        // return res.status(HttpStatus.OK).json({
        //     products
        // })
    }
    @Get('/:productId')
    async GetProduct(@Res() res,@Param() param){
        const product = await this.productService.getProduct(param.productId)
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product)
        // return res.status(HttpStatus.OK).json({
        //     message:"one product",
        //     product
        // })
    }
    // Delete Product: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        if (!productDeleted) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }
    /* @Delete('/:productId')
    async deleteProduct(@Res() res,@Param() param){
        const deletedProduct = await this.productService.deleteProduct(param.productId)
        // console.log(Param)
        if (!deletedProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message:"deleted"
        })
    } */
    /* @Put('/:productId')
    async updateProduct(@Res() res,@Param() param,@Body() createProductDTO:CreateProductDTO){
        const newProduct = await this.productService.updateProduct(param.productId,createProductDTO)
        if (!newProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message:"updated",
            newProduct
        })
    } */
    // Update Product: /update?productID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updatedProduct) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct 
        });
    }
    //////////////////////////////

    /* @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json(product);
    }

    

     */

}