import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css'],
})
export class UserInputFormComponent {
  @Output() db = new EventEmitter<any>();

  addData(userInput: string) {
    const empData = userInput;
    console.log(empData);
    this.db.emit(empData);
    return false;
  }
}
