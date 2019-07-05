
import { ActionReducerMap } from '@ngrx/store';
import { ProductsState } from './products/model';
import { CartState } from './cart/model';
import { cartReducer } from './cart/reducers';
import { productsReducer } from './products/reducers';

export interface AppState {
  products: ProductsState;
  cart: CartState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  products: productsReducer,
  cart: cartReducer,
};
