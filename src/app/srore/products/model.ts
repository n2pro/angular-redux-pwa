import { Product } from '../../model/product.model';

export interface ProductsState {
  pending: boolean;
  fetched: boolean;
  products: Product[];
}
