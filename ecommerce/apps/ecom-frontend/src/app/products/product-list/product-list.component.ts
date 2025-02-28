import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Frigorífico', price: 500, category: 'Kitchen' },
    { id: 2, name: 'Lavadora', price: 300, category: 'Kitchen' },
    { id: 3, name: 'Sofál', price: 400, category: 'Living Room' },
  ]
}
 