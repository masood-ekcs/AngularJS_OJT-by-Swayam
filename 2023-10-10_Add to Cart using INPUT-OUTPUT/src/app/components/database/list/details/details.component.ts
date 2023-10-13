import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() productDetails!: any;
  userInput: any[] = [];

  constructor() {}

  addToCart(sp: any) {
    let selectedProducts = sp;
    console.log(selectedProducts);
    this.userInput.push(selectedProducts);
    console.log(this.userInput);
  }
}
