import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // Common for 3 and 4
  @Output() addBtnClicked = new EventEmitter();
  @Output() subBtnClicked = new EventEmitter();

  // // Process 3 – Starts
  // // as soon as the + addClick button is clicked it will emit to the parent
  // addClick() {
  //   this.addBtnClicked.emit(); // the function will go the parent component HTMl, i.e. App.html
  // }

  // subClick() {
  //   this.subBtnClicked.emit();
  // }
  // // Process 3 – Ends

  // Process 4 – Starts
  addClick(msg: string) {
    //this will capture the message from different buttons and emit it in the msg variable
    this.addBtnClicked.emit(msg);
  }

  // subClick(msg: string) {
  //   this.subBtnClicked.emit(msg);
  // }
}
