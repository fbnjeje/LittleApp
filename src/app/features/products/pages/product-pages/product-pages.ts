import { Component, inject, signal } from '@angular/core';
import { ProductDetail } from '../../components/product-detail/product-detail';
import { ProductList } from '../../components/product-list/product-list';
import { Product } from '../../../../core/models/product';
import { ProductsService } from '../../../../core/services/product.services';

@Component({
  selector: 'app-product-pages',
  imports: [ProductDetail, ProductList],
  templateUrl: './product-pages.html',
  styleUrl: './product-pages.css',
})
export class ProductPages {
  private productsService = inject(ProductsService);

  products = this.productsService.products;
  selected = signal<Product | null>(null);
}
