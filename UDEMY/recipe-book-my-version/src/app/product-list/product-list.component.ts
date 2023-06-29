import { Component, OnInit } from '@angular/core';
import { ProductServise } from '../services/product.service';
import { Product } from '../shared/types';

@Component({
  selector: 'app-productList',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
})
export class ProductList implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productServise: ProductServise) {}

  ngOnInit() {
    this.products = this.productServise.getProducts();
  }

  showProductDescription(index) {
    this.selectedProduct = this.products[index];
  }
}
