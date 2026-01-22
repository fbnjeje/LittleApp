import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from '../../../../core/models/product';
@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input<Products[]>();
  select = output<Products>();
}
