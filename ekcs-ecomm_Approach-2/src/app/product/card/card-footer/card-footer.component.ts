import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent {
  showQuantity : boolean = false

  @Input() availableQuantity !: number
  @Input() purchaseQuantity !: number

  @Output() cartProduct = new EventEmitter()

  addToCart(){
    this.showQuantity = true
    this.cartProduct.emit()
  }
}
