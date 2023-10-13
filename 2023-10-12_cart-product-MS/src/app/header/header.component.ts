import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemCount: number = 0;

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.itemCount = this.productService.cartCount;
  }
}
