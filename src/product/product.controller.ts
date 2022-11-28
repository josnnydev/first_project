 import { Controller,Get, Post,Put,Delete,Res,HttpStatus,Body,Param,NotFoundException } from '@nestjs/common';
 import { CreateProductDTO } from './dto/product.dto';
 import {ProductService} from './product.service'

@Controller('product')
export class ProductController {
    
    constructor(private productService: ProductService){}

    @Post('/create')
   async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO ){
      const product = await  this.productService.createProduct(createProductDTO)
        return res.status(HttpStatus.OK).json({msg: 'received', product: product});
    }

    @Get('/gets')
    async getProducts(){
       const products = await this.productService.getProducts()
        return products;
    }

    @Get('/get/:productId')
    async getProduct(@Param('productId') productId){
       const product = await this.productService.getProduct(productId)
       if(!product) throw new NotFoundException('product not exists')
        return product;
    }

    @Put('/update/:productId')
    async updateProduct(@Param('productId')productId, @Body()CreateProductDTO: CreateProductDTO){
       const product = await this.productService.updateProduct(productId,CreateProductDTO)
       return product;

    }

    @Delete('/delete/:productId')
    async deleteProduct(@Param('productId') productId){
        const product = await this.productService.deleteProduct(productId)
        if(!product) throw new NotFoundException('product not exists')
        return 'product deleted';
    }

   
    
}
