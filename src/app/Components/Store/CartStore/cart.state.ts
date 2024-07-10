export interface cartState {
    cartItems: any[],
    totalPrice :number,
    searchTerm : string
    priceRange : number
    
   
}


export const cartInitialState: cartState = {
    cartItems: [],
    totalPrice : 0,
    searchTerm : '',
    priceRange : 0
}