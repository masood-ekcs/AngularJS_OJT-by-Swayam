import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  #authService = inject(AuthService)
  userInfo : any = {
    email: "",
    password: ""
  }

  signUp() : void{
    console.log(this.userInfo);
    this.#authService.signUp(this.userInfo.email, this.userInfo.password)
    
  }
}
