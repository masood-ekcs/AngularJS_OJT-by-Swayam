import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  // capture the values from the input fields

  constructor(private serviceData: DataService) {}

  submitButton(userName: string, userImage: string, userJobTitle: string): any {
    this.serviceData.createNewEmployee({ userName, userImage, userJobTitle });
    return false;
  }
}
