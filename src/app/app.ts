import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPages } from "./features/products/pages/product-pages/product-pages";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductPages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mini-mini');
}
