import { Component } from '@angular/core';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css'],
})
export class RegisterNewUserComponent {
  constructor(private myFormService: FormService) {}

  registerUser(form: any) {
    console.log(form.value);
    let userId = form.value.userId;
    let password = form.value.password;
    this.myFormService.registerNewUser(userId, password).subscribe((res) => {
      console.log(res);
    });
  }
}
