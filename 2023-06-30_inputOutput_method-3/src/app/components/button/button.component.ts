import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // Process 3 – Starts

  @Output() addBtnClicked = new EventEmitter(); // this is used to SEE if a button is clicked
  @Output() subBtnClicked = new EventEmitter();

  // as soon as the + addClick button is clicked it will emit to the parent
  addClick() {
    this.addBtnClicked.emit(); // this is used to SEND
    // the function will go the parent component HTMl, i.e. App.html
  }

  subClick() {
    this.subBtnClicked.emit();
  }
  // Process 3 – Ends
}
