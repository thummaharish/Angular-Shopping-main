import { createAction, props } from '@ngrx/store';

export const AddtoCart = createAction('AddtoCart', props<{product:any}>());
export const TotalPrice = createAction('TotalPrice');
export const IncementQuantity = createAction('Increment', props<{product:any}>());
export const DecrementQuantity = createAction('Decrement', props<{product:any}>());
export const Removeitem = createAction('Removeitem', props<{product:any}>());
export const SearchProduct = createAction('SearchProduct', props<{productName:string}>());
export const PriceRange = createAction('PriceRange', props<{productPrice : number}>() )




