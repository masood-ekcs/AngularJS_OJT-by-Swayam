import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  inputLog!: string; // input by the user from the INPUT tag
  myLog = {};

  clearLogButton: boolean = false;

  constructor(public myService: DataService) {}

  showClearLogButton() {
    this.inputLog = '';
  }

  addLog() {
    console.log(this.inputLog);
    let timeStamp = new Date();
    this.myService.displayLogArray.push({
      text: this.inputLog,
      myDate: timeStamp,
    });
    // console.log(this.myService.displayLogArray);
    return false;
  }

  add2LocalStorage() {
    let timeStamp = new Date();
    this.myService.displayLogArray.push({
      text: this.inputLog,
      myDate: timeStamp,
    });
    console.log(this.myService.displayLogArray);
    this.myLog = this.myService.displayLogArray;
    // this.myService.myCompleteLogs = this.myLog;
    localStorage.setItem('myLogData', JSON.stringify(this.myLog));
  }
}
