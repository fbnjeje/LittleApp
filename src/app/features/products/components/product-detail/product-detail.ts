import { Component, input } from '@angular/core';
import { Products } from '../../../../core/models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = input<Products | null>(null);
}
