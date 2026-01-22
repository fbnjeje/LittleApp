import { Component } from '@angular/core';
import { ProductDetail } from "../../components/product-detail/product-detail";

@Component({
  selector: 'app-product-pages',
  imports: [ProductDetail],
  templateUrl: './product-pages.html',
  styleUrl: './product-pages.css',
})
export class ProductPages {

}
