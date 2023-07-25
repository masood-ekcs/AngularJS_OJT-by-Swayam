import { Component, Input, Output } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiData: any = [];
  myID: any;

  get(searchUserID: HTMLInputElement) {
    const mySearchedID = parseInt(searchUserID.value);
    // console.log(mySearchedID);
    this.myID = mySearchedID;
    return false;
  }

  constructor(public myService: DataService) {}
  logData() {
    this.myService.getDataFromApi().subscribe((data) => {
      this.apiData = data;
    });
  }

  ngOnInit() {
    this.logData();
  }
}
