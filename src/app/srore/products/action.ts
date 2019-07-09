import { Action } from '@ngrx/store';
import { Product } from '../../model/product.model';
import { EProductsActions } from './types';

export class ProductsGet implements Action {
  public readonly type = EProductsActions.PRODUCTS_PENDING;
}

export class ProductsGetSuccess implements Action {
  public readonly type = EProductsActions.PRODUCTS_FETCHED;
  constructor(public payload: Product[]) {}
}

export class ProductsClear implements Action {
  public readonly type = EProductsActions.PRODUCTS_CLEAR;
}

export class ProductsChangeQuantity implements Action {
  public readonly type = EProductsActions.PRODUCTS_ITEM_CHANGE_QUANTITY;
  constructor(public payload: Product) {}
}

export class ProductDelete implements Action {
  public readonly type = EProductsActions.PRODUCT_DELETE;
    constructor(public payload: string) {}
}

export class ProductsRevert implements Action {
  public readonly type = EProductsActions.PRODUCTS_REVERT;

}

export type ProductsActions = ProductsGet | ProductsGetSuccess | ProductsClear | ProductsChangeQuantity | ProductDelete | ProductsRevert ;
