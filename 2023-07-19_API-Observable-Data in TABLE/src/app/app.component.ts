import { Component, Input, Output } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // searchUserID: any;
  apiData: any = [];
  myID: any;

  constructor(public myService: DataService) { }

  // search using the SEARCH button
  get(searchUserID: HTMLInputElement) {
    // get(searchUserID: any) {
    const mySearchedID = parseInt(searchUserID.value);
    // console.log(mySearchedID);
    this.myID = mySearchedID;
    return false;
  }

  logData() {
    this.myService.getDataFromApi().subscribe((data) => {
      this.apiData = data;
    });
  }

  ngOnInit() {
    this.logData();
  }
}
