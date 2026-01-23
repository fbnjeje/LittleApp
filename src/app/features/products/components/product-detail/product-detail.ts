import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  product = input<Product | null>(null);
}
