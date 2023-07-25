import { Component } from '@angular/core';
import { Router } from '@angular/router'; // we'll import the Router module which will take of all our routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {} // means create a private variable called 'router' accessible within this App component

  myUrl: number = 0;
  prevButton = false;
  nextButton = true;
  myroutes = ['/', '/about', '/contact', '/resources'];

  currentIndex() {
    const currentUrl = this.router.url;
    const currentIndex = this.myroutes.findIndex((link) => link == currentUrl);
    return currentIndex;
  }

  hasNext(): boolean {
    let index = this.currentIndex();
    return index != this.myroutes.length - 1;
  }

  hasPrevious(): boolean {
    let index = this.currentIndex();
    return index != 0;
  }

  nextPage() {
    // this.myUrl += 1;
    let index = this.currentIndex();
    if (index < this.myroutes.length - 1) {
      const next = this.myroutes[index + 1];
      this.router.navigateByUrl(next);
    }
  }

  prevPage() {
    // this.myUrl -= 1;
    let index = this.currentIndex();
    if (index > 0) {
      const next = this.myroutes[index - 1];
      this.router.navigateByUrl(next);
    }
  }
}
