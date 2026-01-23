import { Injectable, signal } from '@angular/core';
import { Product } from './../models/product';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly _products = signal<Product[]>([
    { id: 1, name: 'Pedro Pascal', price: 12390 },
    { id: 2, name: 'Triline', price: 1230 },
    { id: 3, name: 'George Harrison', price: 0 },
  ]);

  products = this._products.asReadonly();
}
