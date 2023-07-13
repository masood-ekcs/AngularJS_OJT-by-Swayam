import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employeeDetails: any[] = []; // creating an empty array to store the future employee details.
  // display5Cards: any[] = this.employeeDetails.slice(0, 3);

  displayButtons = true;
  displayEmpForm = false;
  displayCard = false;
  Arr = Array;
  num = 10;

  addNewEmployee() {
    // displays the Add New Employee form and hides the landing page buttons
    this.displayEmpForm = true;
    this.displayButtons = false;
  }

  // capture the values from the input fields
  addNewEmployeeDetails(
    empName: string,
    empImage: string,
    empTitle: string
  ): boolean {
    // console.log(empName, empImage, empTitle) // print the values on the console
    this.employeeDetails.push({ empName, empImage, empTitle }); // adds the new value to the array
    this.goBack(); // go back to the main screen once the details has been added
    alert('New user added!'); // alerts the user
    return false;
  }

  checkCurrentEmployee() {
    console.log(this.employeeDetails);
    this.displayCard = true;
    this.displayButtons = false;
    // this.displayEmpForm = false;
  }

  goBack() {
    this.displayButtons = true;
    this.displayEmpForm = false;
    this.displayCard = false;
  }
}

//
