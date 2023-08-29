import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userId!: string;
  userPassword!: string;

  userDetails: any;
  constructor(private auth: AuthService, private route: Router) {
    this.auth.getUsers().subscribe((res) => {
      console.log('res', res);
      this.userDetails = res;
    });
  }

  registerNewUser() {
    this.auth.registerUser(this.userId, this.userPassword).subscribe((res) => {
      console.log('res', res);
    });
    this.userId = '';
    this.userPassword = '';
  }

  loginBtn() {
    const userFound = this.userDetails.find(
      (item: any) => item.userId == this.userId
    );
    const userPasswordMatch = this.userDetails.find(
      (item: any) => item.userPassword == this.userPassword
    );

    // console.log(userFound, userPasswordMatch);

    if (userFound) {
      this.route.navigateByUrl('users');
    }

    // console.log(this.userDetails);
  }

  submitData(form: any) {
    console.log(form.value);
  }
}
