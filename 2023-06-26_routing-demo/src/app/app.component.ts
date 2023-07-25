import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routing-demo';
  contentrouting = {};
  constructor(private router: Router) {}

  onClick() {
    console.log('No Contact Info Available');
    // window.alert('You clicked the Contact Page')
    // this will navigate to the specific url/component
    // [/name] --> is called slug
    this.router.navigate(['/mycontact']);
  }
  //
}
