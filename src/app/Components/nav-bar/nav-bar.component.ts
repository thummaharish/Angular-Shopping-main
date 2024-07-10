import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from '../Store/CartStore/cart.state';

import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
import { PriceRange, SearchProduct } from '../Store/CartStore/cart.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  CartItems !: any[]

  CartTotalPrice !: number

 searchTerm !: string
 changePrice !: number



  constructor(private store : Store<{CartReducer:cartState}>, private AuthService : AuthService, private router : Router){
    
  }

  ngOnInit(): void {

    
   
    this.GetStoreValues()

  }



  GetStoreValues(){
    this.store.select('CartReducer').subscribe(data => {
      this.CartItems = data.cartItems
      this.CartTotalPrice = data.totalPrice
      // console.log('nav bar seart term', data.searchTerm)
    })
  }

  SearchProductName(){
    this.store.dispatch(SearchProduct({productName : this.searchTerm}))
    this.router.navigate(['/'])
  }

  PriceFilter(){
    this.store.dispatch(PriceRange({productPrice : this.changePrice}))
  }

  cartChange (){
    this.store.select('CartReducer').subscribe(data => {
      this.CartItems = data.cartItems
      this.CartTotalPrice = data.totalPrice

    })
  }



  Logout(){

    const user = localStorage.getItem('userDetails')

    if(user){
      alert('logout successfully')
      this.AuthService.logoutAuth()
      this.router.navigate(['/'])
      localStorage.removeItem('userDetails')
    }else{
      alert(' already logouted')
    }

   
  }

}
