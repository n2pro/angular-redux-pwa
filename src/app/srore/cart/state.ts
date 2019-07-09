import { CartState } from './model';

const initialState: CartState = {
    pending: false,
    fetched: false,
    data: {
        items: []
    },
    error: ''
};

export { initialState };

