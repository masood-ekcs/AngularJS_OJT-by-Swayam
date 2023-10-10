import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent {
  @Input() products !: Product[] // [{name:string, price:number}.{},{}]

  selectedProduct !: Product;  // {name:string, price:number}



  randomItem = "Basanti"

  date = new Date()

  //                      {name, price}
  // productClick(product : Product){
  //   this.selectedProduct = product
  // }
}
