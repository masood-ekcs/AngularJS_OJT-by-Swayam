import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { userModel } from './form.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  // myValue: string = 'Hello';
  // myNumber: number = 123456;

  inputLog!: string; // input by the user from the INPUT tag
  // inputAge!: number;
  serialNum: number = 0;

  clearLogButton: boolean = false;

  constructor(public myService: DataService) {}

  ngOnInit(): void {
    this.myService.logSource.subscribe((userInputValue: userModel) => {
      this.inputLog = userInputValue.userInput;
    });
  }

  getDate() {
    return new Date().toString();
  }

  addLog() {
    // let timeStamp = new Date();
    // this.myService.displayLogArray.push({
    //   text: this.inputLog,
    //   myDate: timeStamp,
    // });
    // console.log(this.myService.displayLogArray);
    // console.log(this.inputLog, this.inputAge);
    // this.serialNum++;
    this.myService.addToLogsData({
      id: '1',
      userInput: this.inputLog,
      date: this.getDate(),
    });
  }

  showClearLogButton() {
    this.inputLog = '';
  }

  sub() {
    this.myService.addToTemp();
  }
}
