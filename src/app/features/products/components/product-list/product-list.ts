import { Component, input, output, signal } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  template: `
    <h2>Productos</h2>

    @for (product of products(); track product.id) {
      <p (click)="select.emit(product)">
        {{ product.name }}
      </p>
    }
  `,
})
export class ProductList {
  products = input<Product[]>([]);
  select = output<Product>();
}
