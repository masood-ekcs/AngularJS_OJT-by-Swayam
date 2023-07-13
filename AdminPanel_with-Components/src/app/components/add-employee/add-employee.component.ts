import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  // @Output() submitClicked = new EventEmitter();
  @Output() addEmployee = new EventEmitter();

  // capture the values from the input fields
  submitButton(userName: string, userImage: string, userJobTitle: string): any {
    const employee = { userName, userImage, userJobTitle };
    this.addEmployee.emit(employee); // this will go to $event in the parent
  }
}
