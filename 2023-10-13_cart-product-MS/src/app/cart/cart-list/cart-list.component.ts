import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  cartDB!: ProductInterface[];

  constructor(private productService: ProductServiceService) {}

  deleteFromCart(id: number) {
    this.productService.removeFromCart(id);
  }

  ngOnInit(): void {
    this.cartDB = this.productService.getCartData();
    console.log(this.cartDB);
  }
}
