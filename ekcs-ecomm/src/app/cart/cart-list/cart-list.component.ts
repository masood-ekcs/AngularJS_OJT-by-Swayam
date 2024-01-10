import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  // DI ( Dependency Injection )
  #productService = inject(ProductService);

  cartDB: Product[] = [];

  ngOnInit(): void {
    this.cartDB = this.#productService.getCartData();
  }
}
