import { Product } from '../../model/product.model';

export interface ProductsState {
  pending: boolean;
  fetched: boolean;
  data: { 
    products: Product[];
  }
}
