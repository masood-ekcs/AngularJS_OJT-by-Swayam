import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css'],
  providers: [MessageService],
})
export class RegisterNewUserComponent {
  // toastPosition: string = '';
  showToastleft: boolean = false;

  constructor(
    private myFormService: FormService,
    private myMessageService: MessageService
  ) {}

  registerUser(form: any) {
    console.log(form.value);
    let userId = form.value.userId;
    let password = form.value.password;
    this.myFormService.registerNewUser(userId, password).subscribe((res) => {
      console.log(res);

      // Toast message from PrimeNG
      // this.toastPosition = 'bottom-center';
      this.myMessageService.add({
        // key: 'tl',
        severity: 'success',
        summary: 'Success',
        detail: 'Hello, this is Toast Message',
      });
      this.showToastleft = true;
    });
  }

  cancel() {
    // this.toastPosition = 'top-left';
    this.myMessageService.add({
      // key: 'bc',
      severity: 'error',
      summary: 'Cancel',
      detail: 'Cancel button clicked',
    });
    this.showToastleft = false;
  }
}
