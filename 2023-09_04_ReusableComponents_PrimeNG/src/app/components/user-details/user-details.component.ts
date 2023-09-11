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
  flag: boolean = false;

  // mySavedData = [
  //   { password: 'Masood@123', userId: 'chunmun@jelly.com' },
  //   { password: 'Dhanno@123', userId: 'basanti@dhanno.com' },
  //   { password: 'Saabu@123', userId: 'chacha@saabu.com' },
  //   { password: 'Dhanno@123', userId: 'basanti@dhanno.co' },
  //   { password: 'Dhanno@123', userId: 'basanti@dhanno.uk' },
  //   { password: 'Dhanno@123', userId: 'basanti@dhanno.co.uk' },
  // ];

  constructor(private http: HttpClient) {}

  getDataFromApi() {
    this.http.get(this.listUrl).subscribe(
      (res) => {
        this.getUsers = res;
        console.log('this.getUsers ', this.getUsers);
        const UsersArray = [];
        for (const key in this.getUsers) {
          // console.log(this.getUsers[key]);
          UsersArray.push(this.getUsers[key]);
        }
        this.getUsers = UsersArray;
        this.flag = true;
        console.log('this.getUsers KEY ', this.getUsers);
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
