import { Product } from '../../model/product.model';

export interface CartState {
    pending: boolean;
    fetched: boolean;
    items: Product[];
}
