import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-buttons',
  templateUrl: './display-buttons.component.html',
  styleUrls: ['./display-buttons.component.css'],
})
export class DisplayButtonsComponent {
  @Output() addNew = new EventEmitter();
  @Output() checkCurrent = new EventEmitter();

  addNewEmployee() {
    this.addNew.emit();
  }

  checkCurrentEmployee() {
    this.checkCurrent.emit();
  }
}
