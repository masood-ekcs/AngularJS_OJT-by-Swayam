import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeDetails: any[] = []; // creating an empty array to store the future employee details.

  displayButtons = true;
  displayEmpForm = false;
  displayCard = false;

  addNewEmployee() {
    // displays the Add New Employee form and hides the landing page buttons
    this.displayButtons = false;
    this.displayEmpForm = true;
  }

  addNewEmployeeDetails(employee: any): any {
    console.log(employee);
    console.log(employee.userName, employee.userImage, employee.userJobTitle);
    this.employeeDetails.push(employee);
    this.goBack();
    // alert('New user added!');
    return false; // to avoid refreshing a page
  }

  checkCurrentEmployee() {
    console.log(this.employeeDetails);
    this.displayButtons = false;
    this.displayEmpForm = false;
    this.displayCard = true;
  }

  goBack() {
    this.displayButtons = true;
    this.displayEmpForm = false;
    this.displayCard = false;
  }
}
