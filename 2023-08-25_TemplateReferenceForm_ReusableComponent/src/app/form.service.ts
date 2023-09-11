import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  url: string =
    'https://todoapp-6699d-default-rtdb.firebaseio.com/usersList.json';

  constructor(private http: HttpClient) {}

  registerNewUser(userId: string, password: string) {
    return this.http.post(this.url, {
      userId: userId,
      password: password,
    });
  }

  getUsers() {
    return this.http.get(this.url);
  }
}
