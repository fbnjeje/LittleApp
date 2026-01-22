import { signal } from '@angular/core';
import { Products } from '../models/product';

export class ProductServices {
  private readonly _products = signal<Products[]>([
    { id: 1, name: 'el mejor del mundo', price: 200 },
  ]);

  getProducts() {
    return this._products;
  }
}
