import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartState } from '../Store/CartStore/cart.state';
import {AddtoCart, DecrementQuantity, IncementQuantity, Removeitem} from'../Store/CartStore/cart.action'

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.css'
})
export class CartitemsComponent implements OnInit {
  CartItems !: any[]
  CartTotalPrice !: number

  constructor(private store : Store<{CartReducer:cartState}>){}

  ngOnInit(): void {
    this.store.select('CartReducer').subscribe(data => {
      this.CartItems = data.cartItems
      this.CartTotalPrice = data.totalPrice
      console.log(this.CartItems)
    })
  }

  decrement(item : any){
    this.store.dispatch(DecrementQuantity({product : item}))
    
  }

  increment(item : any){
    this.store.dispatch(IncementQuantity({product : item}))
  }
  RemoveCart(item : any){
    this.store.dispatch(Removeitem({product : item}))
    
  }
}
