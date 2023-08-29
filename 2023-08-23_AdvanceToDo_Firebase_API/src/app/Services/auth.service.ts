import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listUrl = 'https://todoapp-6699d-default-rtdb.firebaseio.com/usersList.json';

  constructor(private http: HttpClient) {}

  // apiUrl = 'https://todoapp-6699d-default-rtdb.firebaseio.com/todos.json';
  // loginSubmit() {
  //   this.http
  //     .post(this.apiUrl, {
  //       name: 'hello world',
  //     })
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }

  //function to get users data
  getUsers() {
    return this.http.get(this.listUrl).pipe(
      Rx.map((responsedata) => {
        const UserArray = [];
        for (const key in responsedata) {
          if (responsedata.hasOwnProperty(key)) {
            //@ts-ignore
            UserArray.push({ ...responsedata[key], id: key });
          }
        }
        return UserArray;
      })
    );
  }

  registerUser(userId: any, userPassword: any) {
    return this.http.post(this.listUrl, {
      userId: userId,
      password: userPassword,
    });
  }
}
