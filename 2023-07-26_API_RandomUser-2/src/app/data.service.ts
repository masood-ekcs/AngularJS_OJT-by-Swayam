import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}

  getDataFromRandomApi(gender: string) {
    let apiUrl = 'https://randomuser.me/api';
    if (gender == 'female') {
      apiUrl += '?gender=female';
    } else if (gender == 'male') {
      apiUrl += '?gender=male';
    } else {
      ('https://randomuser.me/api');
    }

    return this.http.get(apiUrl);

    // return this.http.get('https://randomuser.me/api/?gender=female');
    // return this.http.get('https://randomuser.me/api/?gender=male');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // getDataFromRandomApi() {
  //   return this.http.get('https://randomuser.me/api');
  //   // return this.http.get('https://randomuser.me/api/?gender=female');
  //   // return this.http.get('https://randomuser.me/api/?gender=male');
  //   // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }
}
