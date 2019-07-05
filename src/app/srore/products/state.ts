import { ProductsState } from './model';
import { Product } from '../../model/product.model';

const initialState: ProductsState = {
  pending: false,
  fetched: false,
  products: []
};

export { initialState };
