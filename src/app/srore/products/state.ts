import { ProductsState } from './model';
import { Product } from '../../model/product.model';

const initialState: ProductsState = {
  pending: false,
  fetched: false,
  data: {
    products:  [
      {
        id: '1',
        name: 'product-1',
        qty: '0'
      },
      {
        id: '2',
        name: 'product-2',
        qty: '0'
      },
    ]
  }

};

export { initialState };
