import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http: HttpClient) {}

  getDataFromRandomApi() {
    return this.http.get('https://randomuser.me/api');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
