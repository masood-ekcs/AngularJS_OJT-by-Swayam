import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-template-reference-form',
  templateUrl: './template-reference-form.component.html',
  styleUrls: ['./template-reference-form.component.css'],
})
export class TemplateReferenceFormComponent implements OnInit {
  userData: any[] = [];
  validUser: boolean = false;

  // passwordValidator: any =
  //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$';

  constructor(private router: Router, private myFormService: FormService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.myFormService.getUsers().subscribe((res) => {
      // console.log((res as any)['-Ncx4h5L5m6-J9Cx7DDC']);

      for (const key in res) {
        this.userData.push((res as any)[key]);
      }
      console.log('userData ', this.userData);
    });
  }
  // chacha@saabu.com
  // Saabu@123
  // Masood@123

  submitData(form: any) {
    // console.log(form);
    let userId = form.value.userId;
    let password = form.value.password;
    // let validUser = false;

    const foundUser = this.userData.find(
      (myItem) => myItem.userId === userId && myItem.password === password
    );
    if (foundUser) {
      this.showUsers();
      // console.log('foundUserId ', foundUser);
    }

    // for (let i = 0; i < this.userData.length; i++) {
    //   if (
    //     userId === this.userData[i].userId &&
    //     password === this.userData[i].password
    //   ) {
    //     this.validUser = true;
    //     console.log('valid user');
    //     this.showUsers();
    //     break;
    //   }
    // }

    // for (let i = 0; i < this.userData.length; i++) {
    //   if (
    //     userId === this.userData[i].userId &&
    //     password === this.userData[i].password
    //   ) {
    //     this.validUser = true;
    //     break;
    //   }
    // }
    // if (this.validUser == true) {
    //   console.log('valid user:  ', this.validUser);
    //   this.showUsers();
    //   this.router.navigateByUrl('userdetails');
    // } else {
    //   console.log('Not a valid user:  ', this.validUser);
    //   alert('Wrong Credentials');
    // }

    // console.log(form.value);
    // console.log(form.value.userId);
    // console.log(form.value.password);
  }

  showUsers() {
    this.router.navigateByUrl('userdetails');
  }
}
