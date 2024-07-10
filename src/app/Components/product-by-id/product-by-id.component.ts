import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../Services/product-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddtoCart } from '../Store/CartStore/cart.action';
import { cartState } from '../Store/CartStore/cart.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrl: './product-by-id.component.css'
})
export class ProductByIdComponent implements OnInit {

  product !: any

  productId !: any
 


  constructor(private activatedRoute : ActivatedRoute, private ProductsApi: ProductApiService,  private router:Router, private store : Store<{CartReducer:cartState}>){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res =>{
      this.productId = res.get('productId')
      
    })
  
    this.GetProductById()
  }
  
  GetProductById(){
    this.ProductsApi.getProductsById(this.productId).subscribe(res=>{
      this.product = res

      console.log(this.product)
    })
  }

  addtocart(product : any){
   const user =  localStorage.getItem('userDetails')
    if(user){
      this.store.dispatch(AddtoCart({product:product}))
    }else{
      alert('login before add product to cart')
    }
  }

 



}
