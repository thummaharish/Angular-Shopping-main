import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../Services/product-api.service';
import { Store } from '@ngrx/store';
import { cartState } from '../Store/CartStore/cart.state';
import { AddtoCart } from '../Store/CartStore/cart.action';

@Component({
  selector: 'app-product-byid',
  templateUrl: './product-byid.component.html',
  styleUrl: './product-byid.component.css'
})
export class ProductByidComponent implements OnInit {

  product !: any

  productId !: any
  user =  localStorage.getItem('userDetails')


  constructor(private activatedRoute : ActivatedRoute, private ProductsApi: ProductApiService,  private router:Router, private store : Store<{CartReducer:cartState}>){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res =>{
      this.productId = res.get('Id')
      
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
    
    if(this.user){
      this.store.dispatch(AddtoCart({product:product}))
    }else{
      alert('login before add product to cart')
    }
  }



}
