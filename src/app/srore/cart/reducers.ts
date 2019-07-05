import { ECartActions } from './types';
import { CartState } from './model';
import { initialState } from './state';
import { CartActions } from './action';

export function cartReducer(state = initialState, action: CartActions): CartState {
  switch (action.type) {
    case ECartActions.CART_PENDING: {
      return {
        ...state,
        fetched: false,
        pending: true,
      };
    }
    case ECartActions.CART_FETCHED: {
      return {
        ...state,
        pending: false,
        fetched: true,
        items: action.payload ? action.payload.products : [],
      };
    }
    case ECartActions.CART_UPDATE: {
      return {
        ...state,
        pending: true,
        fetched: false,
      };
    }
    case ECartActions.CART_CLEAR: {
      return {
        ...state,
        pending: false,
        fetched: true,
        items: initialState.items,
      };
    }
    case ECartActions.CART_ITEM_REMOVE: {
      return {
        ...state,
        pending: true,
        fetched: false,
      };
    }
    default:
      return state;
  }
}