import { Component,  OnChanges,  OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from '../Store/CartStore/cart.state';
import { AdminService } from '../Services/Auth/admin.service';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';
import { SearchProduct } from '../Store/CartStore/cart.action';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  CartItems !: any[]

  CartTotalPrice !: number

 



  constructor(private store : Store<{CartReducer:cartState}>, private AuthService : AuthService, private router : Router){}

  ngOnInit(): void {
   
    this.GetStoreValues()

  }



  GetStoreValues(){
    this.store.select('CartReducer').subscribe(data => {
      this.CartItems = data.cartItems
      this.CartTotalPrice = data.totalPrice
     
      
    })
  }





  

  


  cartChange (){
    this.store.select('CartReducer').subscribe(data => {
      this.CartItems = data.cartItems
      this.CartTotalPrice = data.totalPrice

      console.log(this.CartItems, this.CartTotalPrice )
    })
  }



  Logout(){
    this.AuthService.logoutAuth()
    this.router.navigate(['/'])
    localStorage.removeItem('userDetails')
  }

}
