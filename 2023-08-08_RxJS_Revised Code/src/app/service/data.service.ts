import { Injectable } from '@angular/core';
import { userModel } from '../components/input-form/form.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // displayLogArray: any[] = [];

  private LogsData: userModel[] = [];

  logSource = new BehaviorSubject<userModel>({
    id: '',
    userInput: '',
    date: '',
  });

  tempShare = new BehaviorSubject<number>(0);

  // selectedLog = this.logSource.asObservable();

  setFormLog(userInput: userModel) {
    this.logSource.next(userInput);
    console.log(userInput);
  }

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

  addToTemp() {
    this.tempShare.next(1);
  }
}
