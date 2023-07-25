import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // userData: any = [];

  // data!: Observable<any>;
  // Observable keeps the data-stream open and is used to send data to the stream

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // https://jsonplaceholder.typicode.com/posts
  // https://jsonplaceholder.typicode.com/comments
  // https://jsonplaceholder.typicode.com/albums
  // https://jsonplaceholder.typicode.com/photos
  // https://jsonplaceholder.typicode.com/todos
  // https://jsonplaceholder.typicode.com/users

  // getData() {
  //   this.data = new Observable((observer) => {
  //     // observer used to send data
  //     setTimeout(() => {
  //       observer.next({
  //         userId: 3,
  //         id: 21,
  //         title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
  //         body: 'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt',
  //       });
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next([2, 4, 'ten', 'ninty-five']);
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('Hello');
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next(4);
  //     }, 4000);
  //   });

  // return this.data;
  // }
}
