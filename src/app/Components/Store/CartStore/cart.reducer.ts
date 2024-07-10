import { createReducer, on } from '@ngrx/store';
import { cartInitialState } from './cart.state';
import { AddtoCart, DecrementQuantity, IncementQuantity, PriceRange, Removeitem, SearchProduct, TotalPrice } from './cart.action';

export const CartReducer = createReducer(
    
    cartInitialState,

    on(AddtoCart, (state, action) => {
        const finditem = state.cartItems.find(item => { return item.id === action.product.id })

        if (!finditem) {
            const productWithQuantity = { ...action.product, quantity: 1 };
            const updatedCartItems = [...state.cartItems, productWithQuantity]
            const updatedTotalPrice = updatedCartItems.reduce((itemsTotal, item) => {
                let price = item.price * item.quantity;
                return itemsTotal + price;
            }, 0);
            return {
                ...state,

                cartItems: updatedCartItems,
                totalPrice: updatedTotalPrice

                // cartItems: [...state.cartItems, productWithQuantity] 
                // cartItems: [...state.cartItems, action.product] 
            };
        } else {
            alert('this producted added to cart already')
        }

        return state

        // return cartItems:[...state.cartItems, action.product]


    }),
    on(IncementQuantity, (state, action) => {

        const updatedCartItems = state.cartItems.map(item => {
            if (item?.id === action.product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        const updatedTotalPrice = updatedCartItems.reduce((itemsTotal, item) => {
            let price = item.price * item.quantity;
            return itemsTotal += price;
        }, 0);

        return {
            ...state,
            cartItems: updatedCartItems,
            totalPrice: updatedTotalPrice
        };
    }),
    on(DecrementQuantity, (state, action) => {

        let updatedCartItems = state.cartItems.map(item => {
            if (item.id === action.product.id && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);

        const updatedTotalPrice = updatedCartItems.reduce((itemsTotal, item) => {
            let price = item.price * item.quantity;
            return itemsTotal += price;
        }, 0);

        return {
            ...state,
            cartItems: updatedCartItems,
            totalPrice: updatedTotalPrice
        };
       
    }),
    on(Removeitem, (state, action) => {

        const updatedCartItems = state.cartItems.filter(item => item.id !== action.product.id);

        const updatedTotalPrice = updatedCartItems.reduce((itemsTotal, item) => {
            let price = item.price * item.quantity;
            return itemsTotal + price;
        }, 0);

        return {
            ...state,
            cartItems: updatedCartItems,
            totalPrice: updatedTotalPrice
        };

    }),
    on(SearchProduct, (state, action) => {
        const newState = { ...state, searchTerm: action.productName };
        console.log('searchTerm in ngrx', newState.searchTerm);
        return { ...state, searchTerm: action.productName };
      }),

      on(PriceRange, (state, action) => {
        const newState = { ...state, priceRange: action.productPrice };
        // console.log('price range in ngrx', newState);
        console.log('cart state',{ ...state, priceRange: action.productPrice })
        return { ...state, priceRange: action.productPrice };
      }),

)