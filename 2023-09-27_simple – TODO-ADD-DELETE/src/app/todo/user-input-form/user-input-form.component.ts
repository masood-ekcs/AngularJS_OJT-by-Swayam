import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css'],
})
export class UserInputFormComponent {
  @Output() db = new EventEmitter<any>();

  addData(userInput: string) {
    if (!userInput) {
      // userInput will be FALSE if the value is empty
      alert('Task cannot be empty');
      return false;
    } else {
      const empData = { userInput };
      console.log(empData);
      this.db.emit(empData);
      return false;
    }
  }
}
