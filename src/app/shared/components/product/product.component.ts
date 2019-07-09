import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product.model';
import { AppState } from '../../../srore/reducers';
import { Store } from '@ngrx/store';
import { CartRemoveItem } from '../../../srore/cart/action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input()
  public product: Product;

  @Output()
  public add = new EventEmitter<Product>();
  @Output()
  public remove = new EventEmitter<any>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  public selfAdd($event) {
   this.add.emit(this.product);
  }

  public selfRemove($event) {
    this.store.dispatch(new CartRemoveItem(this.product.id));
    this.remove.emit(this.product);
  }
}
