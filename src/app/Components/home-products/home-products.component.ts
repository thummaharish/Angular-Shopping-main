import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductApiService } from '../Services/product-api.service';
import { Store } from '@ngrx/store';
import { cartState } from '../Store/CartStore/cart.state';
import { AddtoCart } from '../Store/CartStore/cart.action';


@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent implements OnInit {

   allProducts : any = []
   addedProduct : any = {}
   totalPrice  = 0
   searchProductName = ''

   user =  localStorage.getItem('userDetails')

   



constructor(private productApi : ProductApiService, private store : Store<{CartReducer:cartState}> ){}

ngOnInit(): void {
  this.getAllProducts()
  this.getStore()
}



getAllProducts(){

  this.productApi.getProducts().subscribe((res : any) => {

    if (this.searchProductName === '' || !this.searchProductName) {
      this.allProducts = res;
    } 
    else {
      this.allProducts = res.filter((product : any)=> product.title.toLowerCase().includes(this.searchProductName.toLowerCase()))
      
      console.log('home product =', this.allProducts);
    }
  })


}



getStore(){
  this.store.select('CartReducer').subscribe(data=>{
    this.addedProduct = data.cartItems
    this.totalPrice = data.totalPrice
    this.searchProductName = data.searchTerm

    console.log('home product component search term', this.searchProductName)
  })
}

addtocart(product : any){
  // let user = localStorage.getItem('userDetails')
  // console.log('user =', this.user)

  if(this.user){
    this.store.dispatch(AddtoCart({product:product}))
  }else{
    alert('login before add product to cart')
  }
}


}
