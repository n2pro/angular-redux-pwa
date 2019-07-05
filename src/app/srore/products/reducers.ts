import { initialState } from './state';
import { ProductsState } from './model';
import { EProductsActions } from './types';
import { ProductsActions } from './action';

export function productsReducer(state = initialState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case EProductsActions.PRODUCTS_PENDING: {
      return {
        ...state,
        fetched: false,
        pending: true,
      };
    }
    case EProductsActions.PRODUCTS_FETCHED: {
      return {
        ...state,
        pending: false,
        fetched: true,
        products: action.payload ? action.payload : [],
      };
    }
    case EProductsActions.PRODUCTS_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
}
