import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../model/product.model';
import { CartGet, CartRemoveItem } from '../../../srore/cart/action';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../srore/reducers';
import { cartData } from '../../../srore/cart/selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  public cart$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.cart$ = store.pipe(select(cartData));
   }

  ngOnInit() {
    this.store.dispatch(new CartGet());
  }

  public removeFromCart(product: Product): void {
    this.store.dispatch(new CartRemoveItem(product.id));
  }

}
