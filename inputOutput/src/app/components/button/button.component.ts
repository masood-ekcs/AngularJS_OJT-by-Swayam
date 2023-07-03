import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() addBtnClicked = new EventEmitter();
  @Output() subBtnClicked = new EventEmitter();

  addClick(msg: string) {
    this.addBtnClicked.emit(msg);
  }

  // subClick() {
  //   this.subBtnClicked.emit();
  // }
}
