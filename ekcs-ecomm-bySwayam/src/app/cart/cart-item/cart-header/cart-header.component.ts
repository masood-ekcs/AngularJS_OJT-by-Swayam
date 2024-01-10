import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css'],
})
export class CartHeaderComponent {
  @Input() title!: string;
  @Input() ratings!: number[];
}
