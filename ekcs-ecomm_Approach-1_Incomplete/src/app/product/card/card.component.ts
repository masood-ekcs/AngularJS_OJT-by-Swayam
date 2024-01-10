import { Component , Input} from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product !: Product

  constructor(private productService : ProductService){}

  addToCart() : void {
    this.productService.addToCart(this.product.id)
  }
}
