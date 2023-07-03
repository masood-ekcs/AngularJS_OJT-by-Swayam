import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  displayForm = true;
  ageGreater = false; // greater than 13
  ageSmaller = false; // lesser than 13
  ageErrorInput = false;

  login(age: string): boolean {
    const intAge = parseInt(age);

    // this.displayForm = false;

    if (intAge > 13) { // if age is greater than 13
      this.ageGreater = true;
      this.ageSmaller = false;
      console.log('Greater');
    } else if (intAge > 0 && intAge <= 13) { // if age is greater than 0 and lesser than 13
      this.ageSmaller = true;
      this.ageGreater = false;
      this.displayForm = false;
      console.log('Smaller');
    }
    else { // if age is empty or less than 0
      this.displayForm = false
      this.ageErrorInput = true
    }
    return false;
  }

  editInfo(): boolean { // function to be called if age is smaller than 13
    this.displayForm = true;
    this.ageSmaller = false;
    return false;
  }

  ageError(): boolean { // function to be called if age field is blank/error
    this.displayForm = true
    this.ageErrorInput = false
    return false
  }

  demoFunction(): boolean {
    // Some process
    return false


  }



}
