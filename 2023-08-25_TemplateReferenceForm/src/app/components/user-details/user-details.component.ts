import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  listUrl = 'https://todoapp-6699d-default-rtdb.firebaseio.com/usersList.json';
  getUsers!: any;

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    this.http.get(this.listUrl).subscribe(
      (res) => {
        // console.log(res);
        this.getUsers = res;
        const UsersArray = [];
        for (const key in this.getUsers) {
          // console.log(this.getUsers[key]);
          UsersArray.push(this.getUsers[key]);
        }
        this.getUsers = UsersArray;
        // console.log(this.getUsers['-NcSZm4Q6s3EC0WGqkK0']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // -NcSZm4Q6s3EC0WGqkK0

  ngOnInit(): void {
    this.getDataFromApi();
  }
}
