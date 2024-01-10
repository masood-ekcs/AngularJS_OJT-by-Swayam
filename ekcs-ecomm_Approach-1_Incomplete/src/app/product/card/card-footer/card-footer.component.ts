import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent {
  @Output() cartBtnClick = new EventEmitter<any>()

  addToCart() : void{
    this.cartBtnClick.emit()
  }
  
}
