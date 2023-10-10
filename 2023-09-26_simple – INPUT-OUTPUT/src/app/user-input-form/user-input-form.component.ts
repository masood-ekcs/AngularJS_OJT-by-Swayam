import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css'],
})
export class UserInputFormComponent {
  // eventEmitter VARIABLE to hold the value from the userInput
  @Output() userInputEmittedValue = new EventEmitter<any>();

  // userInput value is being called here
  addData(userInput: string) {
    console.log('userInput value from the userInput component ', userInput);
    // the value is then passed out to the parent component using emit
    this.userInputEmittedValue.emit(userInput);
  }
}