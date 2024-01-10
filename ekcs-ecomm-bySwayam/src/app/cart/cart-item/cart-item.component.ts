import { Component, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  #router = Inject(Router);

  @Input() cartData!: Product;

  shopBtn() {
    this.#router.navigate(['/']);
  }
  removeCart() {}
}
