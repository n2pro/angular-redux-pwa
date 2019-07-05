import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product.model';

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

  constructor() { }

  ngOnInit() {
  }

  public selfAdd($event) {
   this.add.emit(this.product);
  }

  public selfRemove($event) {
    this.remove.emit(this.product);
  }
}
