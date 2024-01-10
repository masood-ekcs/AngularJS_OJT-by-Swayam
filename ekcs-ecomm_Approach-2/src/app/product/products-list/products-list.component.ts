import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  // DI ( Dependency Injection )
  #productService = inject(ProductService)

  // Variables
  productDB : Product[] = []

  // Lifecycle methods
  
  ngOnInit(): void {
    debugger
    this.productDB = this.#productService.getData()
  }
}
