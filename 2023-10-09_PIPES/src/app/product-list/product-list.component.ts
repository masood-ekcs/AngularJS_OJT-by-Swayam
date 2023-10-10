import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [{name: "headphone", price: 500}, {name: 'microphone', price: 750}, {name: 'mouse', price: 1200}]
}
