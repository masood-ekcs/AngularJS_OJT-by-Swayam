import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productsDB!: ProductInterface[]; // [{name, price, qty, description}]
  selectedProduct!: ProductInterface;

  cart: number[] = []; // empty array to hold cart list

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productsDB = this.productService.getProduct();
    // console. log(this.productsDB); // to check if the values are coming
  }

  updateCartData(productID: number) {
    this.cart.push(productID);
    console.log(this.cart);
    this.productService.cartCount = this.cart.length;
    console.log('Cart Count: ', this.productService.cartCount);
  }
}
