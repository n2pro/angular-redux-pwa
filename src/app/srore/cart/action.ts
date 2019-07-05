
import { ECartActions } from './types';
import { Action } from '@ngrx/store';
import { Cart } from '../../model/cart.model';
import { Product } from '../../model/product.model';


export class CartGet implements Action {
  public readonly type = ECartActions.CART_PENDING;
}

export class CartGetSuccess implements Action {
  public readonly type = ECartActions.CART_FETCHED;
  constructor(public payload: Cart) {}
}

export class CartClear implements Action {
  public readonly type = ECartActions.CART_CLEAR;
}

export class CartAddItem implements Action {
  public readonly type = ECartActions.CART_UPDATE;
  constructor(public payload: Product) {}
}

export class CartRemoveItem implements Action {
  public readonly type = ECartActions.CART_ITEM_REMOVE;
  constructor(public payload: string) {}
}

export type CartActions = CartGet | CartGetSuccess | CartClear | CartAddItem | CartRemoveItem;
