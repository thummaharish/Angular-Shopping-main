export interface cartState {
    cartItems: any[],
    totalPrice :number,
    searchTerm : string
    
   
}


export const cartInitialState: cartState = {
    cartItems: [],
    totalPrice : 0,
    searchTerm : ''
}