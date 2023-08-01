import { Injectable } from '@angular/core';
import { userModel } from '../components/input-form/form.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // displayLogArray: any[] = [];

  LogsData: userModel[] = [];

  // this is equal to:
  // {
  //   id: '1',
  //   userInput: this.inputLog,
  //   date: this.getDate(),
  // }

  constructor() {}

  addToLogsData(obj: userModel) {
    this.LogsData.push(obj);
    console.log(this.LogsData);
  }

  getData() {
    return this.LogsData;
  }
}
