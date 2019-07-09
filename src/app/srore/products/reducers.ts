import { initialState } from './state';
import { ProductsState } from './model';
import { EProductsActions } from './types';
import { ProductsActions } from './action';
import { LoadedRouterConfig } from '@angular/router/src/config';
import { removeProduct } from 'src/app/srore/products/helpers';

export function immutableState() {
  return Object.assign({}, initialState);
}


export function productsReducer(state = immutableState(), action: ProductsActions): ProductsState {
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
        data: {
          products: action.payload ? action.payload : [],
        }
      };
    }
    case EProductsActions.PRODUCTS_CLEAR: {
      return initialState;
    }
    case EProductsActions.PRODUCT_DELETE: {
      return {
        ...state,
        pending: true,
        fetched: false,
        data: {
          ...state.data,
          products: removeProduct(state.data.products, action.payload)
        }
      };
    }
    case EProductsActions.PRODUCTS_REVERT: {
      return immutableState();
    }
    default:
      return state;
  }
}
