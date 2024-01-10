import { Component, inject , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  #authService = inject(AuthService);

  user : boolean = false
 
  ngOnInit(): void {
   this.#authService.isUserLoggedIn().subscribe((val: any) => {
      if(val){
        this.user = true
        console.log(true); 
      }else{
        this.user = false
        console.log(false);
      }
    })   
  }
 

  logout() {
    this.#authService.signout();
  }
}
