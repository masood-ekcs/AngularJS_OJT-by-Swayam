import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  randomApiData: any = [];

  constructor(public http: HttpClient) {}

  displayName: boolean = true;
  displayEmail: boolean = false;
  displayBirthday: boolean = false;
  displayLocation: boolean = false;
  userBirthday: any;

  getDataFromRandomApi() {
    return this.http.get('https://randomuser.me/api');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getData() {
    this.getDataFromRandomApi().subscribe((data) => {
      this.randomApiData = data;
      this.randomApiData = this.randomApiData.results;
      // console.log(this.randomApiData);
      // return this.randomApiData;
    });
  }
}
