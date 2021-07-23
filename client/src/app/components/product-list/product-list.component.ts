import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product';

import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  products : Product[] = []
  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts()
      .subscribe(
        res=>{
          console.log(res)
          this.products = res
          // console.log(this.products,"hola");
          
        },
        error =>console.log(error)
      )
  }
  deleteProduct(id:string){
    this.productService.deleteProduct(id)
      .subscribe(
        res =>{
          this.getProducts()
        },
        error => console.log(error)
      )
    
  }
}
