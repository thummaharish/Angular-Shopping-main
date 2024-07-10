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
   searchProducts : any =[]
   addedProduct : any = {}
   totalPrice  = 0
   searchProductName = ''
   changePrice !: number


constructor(private productApi : ProductApiService, private store : Store<{CartReducer:cartState}> ){}

ngOnInit(): void {
  this.getAllProducts()
  this.getStore()
}



getAllProducts(){

  this.productApi.getProducts().subscribe((res : any) => {
    this.allProducts = res;

    this.searchProducts = this.allProducts

  })


}

getStore(){
  this.store.select('CartReducer').subscribe(data=>{
    this.addedProduct = data.cartItems
    this.totalPrice = data.totalPrice
    this.searchProductName = data.searchTerm
    this.changePrice = data.priceRange

    console.log('home product component price', this.changePrice)

    this.searchProducts = this.allProducts.filter((product:any)=>{
      if (this.searchProductName && this.changePrice) {
        return product.title.toLowerCase().includes(this.searchProductName.toLowerCase()) 
               && product.price < this.changePrice;
      }else if(this.searchProductName === '' && this.changePrice === 0){
        return this.searchProducts = this.allProducts
      }
      // If only searchProductName is specified
      if (this.searchProductName) {
        return product.title.toLowerCase().includes(this.searchProductName.toLowerCase());
      }
      // If only changePrice is specified
      if (this.changePrice) {
        return product.price < this.changePrice;
      }
      // If neither is specified, return false (or adjust as needed)
      // return this.searchProducts = this.allProducts
    })


    console.log('home product component search term', this.searchProducts)
  })
}

addtocart(product : any){
  let user = localStorage.getItem('userDetails')
  console.log('user =', user)

  if(user){
    this.store.dispatch(AddtoCart({product:product}))
  }else{
    alert('login before add product to cart')
  }
}




}
