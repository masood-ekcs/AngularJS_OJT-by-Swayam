import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  randomApiData: any = [];

  constructor(public http: HttpClient) {}

  displayGender!: string;
  displayName: boolean = true;
  displayEmail: boolean = false;
  displayBirthday: boolean = false;
  displayLocation: boolean = false;
  userBirthday: any;

  getDataFromRandomApi(gender: string) {
    let apiUrl = 'https://randomuser.me/api';
    if (gender == 'female') {
      apiUrl += '?gender=female';
    } else if (gender == 'male') {
      apiUrl += '?gender=male';
    } else if (gender == 'both') {
      apiUrl = 'https://randomuser.me/api';
    }
    return this.http.get(apiUrl);

    // return this.http.get('https://randomuser.me/api');
    // return this.http.get('https://randomuser.me/api/?gender=female');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getData() {
    this.getDataFromRandomApi(this.displayGender).subscribe((data) => {
      this.randomApiData = data;
      this.randomApiData = this.randomApiData.results;
      // console.log('displayGender', this.displayGender);
      // console.log(this.randomApiData);
      // return this.randomApiData;
    });
  }
}
