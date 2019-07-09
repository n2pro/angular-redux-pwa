import { Product } from '../../model/product.model';

export interface CartState {
    pending: boolean;
    fetched: boolean;
    data: {
        items: Product[];
    };
    error: string;
}
