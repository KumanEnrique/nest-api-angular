import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router'

import {ProductService} from '../../services/product.service'
import {Product} from '../../interface/Product'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product :Product = {
    name:'',
    description:'',
    price:20,
    imageURL:''
  };
  edit: boolean = false;

  constructor(
    private productService:ProductService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params
    if(params){
      this.productService.getProduct(params.id)
        .subscribe(
          res =>{
            // console.log(res,"product for update")
            this.product = res
            this.edit = true
          },
          error => console.log(error)
        )
    }
  }

  onSubmit(){
    this.productService.createProduct(this.product)
      .subscribe(
        res=>{
          console.log(res)
          this.router.navigate(['/'])
        },
        error=>console.log(error)
      )
    // this.product = { name:'', description:'', price:20, imageURL:'' }
  }
  updateProduct(){
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id,this.product)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/product'])
        },
        error => console.log(error)
      )
  }

}
//min 48.23