import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface for the Product
export interface Product {
  id: number;
  name: string; 
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product; // Receive the product from the parent component
}
