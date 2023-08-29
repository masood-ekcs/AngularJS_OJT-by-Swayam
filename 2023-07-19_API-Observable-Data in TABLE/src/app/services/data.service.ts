import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // userData: any = [];

  // userData: any = [    // dummy data
  //   {
  //     userId: 1,
  //     id: 1,
  //     title:
  //       'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: 'qui est esse',
  //     body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
  //     body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  //   },
  //   {
  //     userId: 1,
  //     id: 4,
  //     title: 'eum et est occaecati',
  //     body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  //   },
  // ];

  // data!: Observable<any>;
  // Observable keeps the data-stream open and is used to send data to the stream

  //   constructor() {
  //     this.userData = [     // We'll put the dummy data in the constructor so that it get executed once the app is loaded
  //     {},
  //   ];
  // }

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
