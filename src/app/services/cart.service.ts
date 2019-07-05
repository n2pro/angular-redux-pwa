import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = { products: [] } as Cart;

  constructor() {}

  public add(product: Product) {
    this.cart.products.push(product);
    const observable = new BehaviorSubject<Cart>(this.cart).asObservable();
    return observable;

  }

  public remove(id: string) {
    this.cart.products = this.cart.products.filter(p => p.id !== id);
    const observable = new BehaviorSubject<Cart>(this.cart).asObservable();
    return observable;
  }

  public getCart() {
    const observable = new BehaviorSubject<Cart>(this.cart).asObservable();
    return observable;
  }
}
