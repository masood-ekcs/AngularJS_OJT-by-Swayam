import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  #authService = inject(AuthService)

  userInfo : any = {
    email: "",
    password: ""
  }

  signIn() : void{
    console.log(this.userInfo);
    this.#authService.signIn(this.userInfo.email, this.userInfo.password)
  }
}
