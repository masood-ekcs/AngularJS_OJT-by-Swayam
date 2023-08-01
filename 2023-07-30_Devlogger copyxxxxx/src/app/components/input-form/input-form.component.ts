import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  inputLog!: string; // input by the user from the INPUT tag

  clearLogButton: boolean = false;

  constructor(public myService: DataService) {}

  getDate() {
    return new Date().toString();
  }

  showClearLogButton() {
    this.inputLog = '';
  }

  onSubmit() {
    console.log('Hello World');
  }

  addLog() {
    // let timeStamp = new Date();
    // this.myService.displayLogArray.push({
    //   text: this.inputLog,
    //   myDate: timeStamp,
    // });
    // console.log(this.myService.displayLogArray);

    this.myService.addToLogsData({
      id: '1',
      userInput: this.inputLog,
      date: this.getDate(),
    });
  }

  add2LocalStorage() {
    let timeStamp = new Date();
    this.myService.displayLogArray.push({
      text: this.inputLog,
      myDate: timeStamp,
    });
    // console.log(this.myService.displayLogArray);

    let newLog = this.myService.displayLogArray;
    let oldLog = localStorage.getItem('myLog');
    if (oldLog) {
      let allLog = oldLog + newLog + '<br>';
      localStorage.setItem('myLog', allLog);
      console.log(allLog);
    } else {
      let allLog = this.myService.displayLogArray + '<br>';
      localStorage.setItem('myLog', allLog);
    }
  }
}
