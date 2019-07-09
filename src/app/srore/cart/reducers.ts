import { ECartActions } from './types';
import { CartState } from './model';
import { initialState } from './state';
import { CartActions } from './action';
import { removeProduct } from './helpers';

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
        data: {
            items: action.payload ? action.payload.products : [],
        }
      };
    }
    case ECartActions.CART_UPDATE: {
      return {
        ...state,
        pending: true,
        fetched: false,
        data: {
            ...state.data,
            items: [...state.data.items, action.payload]
        }
      };
    }
    case ECartActions.CART_CLEAR: {
      return {
        ...state,
        pending: false,
        fetched: true,
        data: {
            ...state.data,
            items: []
        }
      };
    }
    case ECartActions.CART_ITEM_REMOVE: {
      return {
        ...state,
        pending: true,
        fetched: false,
        data: {
          ...state.data,
          items: removeProduct(state.data.items, action.payload)
        }
      };
    }
    default:
      return state;
  }
}
