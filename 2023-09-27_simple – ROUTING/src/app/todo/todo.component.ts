import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  userDb!: string;
  checkValue!: string;
  alertMessage!: string;

  getData(value: string) {
    this.userDb = value;
    console.log('value from App ', this.userDb);

    if (this.userDb === '') {
      // alert('No Data Available...');
      this.checkValue = 'The Value cannot be Empty';
    } else {
      // alert('User input is... ' + this.checkValue);
      this.checkValue = 'Value added, thanks!';
    }
  }
}
