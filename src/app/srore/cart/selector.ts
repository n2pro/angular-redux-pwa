import { AppState } from '../reducers';
import { CartState } from './model';
import { MemoizedSelector, createSelector } from '@ngrx/store';
import { Product } from '../../model/product.model';

const stateCart = (state: AppState): CartState => state.cart;

export const cartPending: MemoizedSelector<AppState, boolean> = createSelector(
    stateCart,
    (state: CartState) => state.pending
);

export const cartFetched: MemoizedSelector<AppState, boolean> = createSelector(
    stateCart,
    (state: CartState) => state.fetched
);

export const cartData: MemoizedSelector<AppState, Product[]> = createSelector(
    stateCart,
    (state: CartState) => state.data.items
);
