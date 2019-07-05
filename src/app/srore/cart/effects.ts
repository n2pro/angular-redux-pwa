import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ECartActions } from './types';
import { switchMap, map } from 'rxjs/operators';
import { Cart } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';
import { CartGetSuccess, CartGet, CartAddItem, CartRemoveItem } from './action';


@Injectable()
export class CartEffects {
  constructor(
    // tslint:disable-next-line:variable-name
    private readonly _actions$: Actions,
    // tslint:disable-next-line:variable-name
    private readonly _store: Store<AppState>,
    private readonly cartService: CartService
  ) {}

  @Effect()
  getCart$: Observable<CartGetSuccess> = this._actions$.pipe(
    ofType<CartGet>(ECartActions.CART_PENDING),
    switchMap(() => this.cartService.getCart().pipe(map((response: Cart) => new CartGetSuccess(response))))
  );

  @Effect({ dispatch: false })
  addItemToCart$: Observable<CartGetSuccess> = this._actions$.pipe(
    ofType<CartAddItem>(ECartActions.CART_UPDATE),
    switchMap((action: CartAddItem) =>
      this.cartService.add(action.payload).pipe(map((response: Cart) => new CartGetSuccess(response)))
    )
  );

  @Effect()
  removeItemFromCart$: Observable<CartGetSuccess> = this._actions$.pipe(
    ofType<CartRemoveItem>(ECartActions.CART_ITEM_REMOVE),
    switchMap((action: CartRemoveItem) =>
      this.cartService.remove(action.payload).pipe(map((response: Cart) => new CartGetSuccess(response)))
    )
  );
}