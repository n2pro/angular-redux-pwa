import { AppState } from '../reducers';
import { ProductsState } from './model';
import { MemoizedSelector, createSelector } from '@ngrx/store';
import { Product } from '../../model/product.model';

const stateProducts = (state: AppState): ProductsState => state.products;

export const productsPending: MemoizedSelector<AppState, boolean> = createSelector(
  stateProducts,
  (state: ProductsState) => state.pending
);

export const productsFetched: MemoizedSelector<AppState, boolean> = createSelector(
  stateProducts,
  (state: ProductsState) => state.fetched
);

export const productsData: MemoizedSelector<AppState, Product[]> = createSelector(
  stateProducts,
  (state: ProductsState) => state.products
);
