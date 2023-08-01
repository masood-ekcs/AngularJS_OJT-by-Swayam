import { Injectable } from '@angular/core';
import { userLog } from '../components/input-form/form.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  displayLogArray: any[] = [];

  LogsArray: userLog[] = [];
  // this is equal to:
  // {
  //   id: '1',
  //   userInput: this.inputLog,
  //   date: this.getDate(),
  // }

  constructor() {}

  addToLogsData(obj: userLog) {
    this.LogsArray.push(obj);
    console.log(this.LogsArray);
  }

  getData() {
    return this.LogsArray;
  }
}
