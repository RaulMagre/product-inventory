import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../../products/product-list/product-list.component';

@Component({
  selector: 'app-main',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
