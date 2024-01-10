import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FirebaseAppModule, initializeApp } from '@angular/fire/app';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent ,SignUpComponent, FirebaseAppModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Demo';
  #authService = inject(AuthService);

  ngOnInit(): void {
    // this.#authService.isUserLoggedIn().subscribe((val: any) => {
    //   if (val) {
    //     console.log(true);
    //   } else {
    //     console.log(false);
    //   }
    // });
  }

  isLog() {
    // console.log(this.#authService.isUserLoggedIn());
  }
}
