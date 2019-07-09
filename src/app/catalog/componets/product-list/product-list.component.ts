import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { productsData } from '../../../srore/products/selector';
import { CartAddItem } from '../../../srore/cart/action';
import { AppState } from '../../../srore/reducers';
import { ProductsGet, ProductsRevert, ProductDelete } from '../../../srore/products/action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = store.pipe(select(productsData));
  }

  ngOnInit() {
    this.store.dispatch(new ProductsGet());
  }

  public addToCart(product: Product) {
    this.store.dispatch(new CartAddItem(product));
  }

  public remove(id: string) {
    this.store.dispatch( new ProductDelete(id));
  }

  public revert() {
    this.store.dispatch( new ProductsRevert());
  }
}
