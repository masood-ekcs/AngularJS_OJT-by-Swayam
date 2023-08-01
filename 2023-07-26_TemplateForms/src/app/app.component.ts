import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    userName: '',
    password: '',
  };

  showPassWord: boolean = false;

  sendDetails(e: any) {
    // console.log(e.target.myName.value); // getting the value from the console/target with myName ID.
    // console.log(e.target.myName.value, e.target.myPass.value);
    console.log(this.userData.userName);
    console.log(this.userData.password);
  }

  submitDetails() {
    console.log(this.userData.userName);
    console.log(this.userData.password);
  }

  show() {
    this.showPassWord = !this.showPassWord;
  }
}
