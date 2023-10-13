import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  // Process 4 – Starts

  @Output() commonBtnClicked = new EventEmitter(); // common eventEmitter for both buttons
  // @Output() subBtnClicked = new EventEmitter();

  btnClick(msg: string) {
    //this will capture the message from different buttons and emit it in the 'msg' variable
    this.commonBtnClicked.emit(msg);
  }
  // Process 4 – Ends
}
