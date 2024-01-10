import { Component , Input, inject} from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// DI
#productSerive = inject(ProductService)

// Input / Ouput
@Input() product !: Product

pushToCart() : void{
  this.#productSerive.addToCart(this.product.id)
}
 
}
