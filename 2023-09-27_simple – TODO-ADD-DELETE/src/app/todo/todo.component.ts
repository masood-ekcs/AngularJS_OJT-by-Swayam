import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  userDb: any[] = []; //empty database to store tasks
  id!: any;
  delId!: any;
  checkValue!: string;
  alertMessage!: string;

  // addNewTask(empData: any) {}

  getData(empData: any) {
    // console.log(empData);
    // let myRandomNumber = Math.floor(Math.random() * (5000 - 20000 + 1)) + 5000;
    // this.id = myRandomNumber;

    let myRandomID = Math.round(Date.now() * 99).toString();
    this.id = myRandomID;
    this.userDb.push({ task: empData.userInput, id: this.id });
    console.log('value from Parent ', this.userDb);
    return false;
  }

  deleteRecord(taskId: any) {
    this.delId = taskId;
    console.log(this.delId);
    for (let i = 0; i < this.userDb.length; i++) {
      if (this.delId == this.userDb[i].id) {
        console.log('Value Matched', this.userDb[i].task);
        this.userDb.splice(i, 1);
      }
    }
  }
}
