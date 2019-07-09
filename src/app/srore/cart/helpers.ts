import { Product } from '../../model/product.model';

const removeProduct = (products: Product[], payload: string): Product[] => {
    return products.filter((product: Product) => product.id !== payload);
};

export { removeProduct };
