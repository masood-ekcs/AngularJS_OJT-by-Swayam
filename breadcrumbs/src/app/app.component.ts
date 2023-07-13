import { Component } from '@angular/core';
import { Router } from '@angular/router'; // we'll import the Router module which will take of all our routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  // means create a private variable called 'router' accessible within this App component

  myUrl: number = 0;
  // prevButton = false; // not needed as we have used the boolean in the hasNext() function
  // nextButton = true; // not needed as we have used the boolean in the hasPrevious() function
  myroutes = ['/', '/about', '/products', '/contact', '/resources'];

  // // this will check if there's in front
  // hasNext(): boolean {
  //   let currentUrl = this.router.url;
  //   let length = this.myroutes.length;
  //   let currentIndex = this.myroutes.findIndex((link) => link == currentUrl);
  //   return currentIndex != length - 1;
  // }

  // // this will check if there's in the back
  // hasPrevious(): boolean {
  //   let currentUrl = this.router.url;
  //   let currentIndex = this.myroutes.findIndex((link) => link == currentUrl);
  //   return currentIndex != 0;
  // }

  currentIndex() {
    // created a new function for the same code from the hasNext/hasPrevious functions.
    const currentUrl = this.router.url; // this will capture the current url // Resources
    const currentIndex = this.myroutes.findIndex((link) => link == currentUrl); // 3
    return currentIndex; // 3
  }

  hasNext(): boolean {
    let index = this.currentIndex();
    return index != this.myroutes.length - 1; //  3, 3
  }

  hasPrevious(): boolean {
    let index = this.currentIndex();
    return index != 0;
  }

  // nextPage() {
  //   this.myUrl += 1;
  //   if (this.myUrl == this.myroutes.length - 1) {
  //     this.nextButton = false;
  //   }
  //   if (this.myUrl >= 1) {
  //     this.prevButton = true;
  //   }
  // }

  // nextPage() {
  //   // using this function, the Next button will work as required, but it will not work in sync with the breadcrumbs.
  //   // The user can browse by clicking on the links or by clicking the buttons, so both needs to be in sync with each other.
  //   this.myUrl += 1;
  //   this.router.navigateByUrl(this.myroutes[this.myUrl]);
  //   // navigateByUrl is a built in function of the router module.
  //   if (this.myUrl == this.myroutes.length - 1) {
  //     this.nextButton = false;
  //   }
  //   if (this.myUrl >= 1) {
  //     this.prevButton = true;
  //   }
  // }

  // nextPage() {
  //   const currentUrl = this.router.url; // this will capture the current url
  //   const currentIndex = this.myroutes.findIndex((link) => link == currentUrl);
  //   if (currentIndex < this.myroutes.length - 1) {
  //     const next = this.myroutes[currentIndex + 1];
  //     this.router.navigateByUrl(next);
  //   }
  // }

  // prevPage() {
  //   const currentUrl = this.router.url; // this will capture the current url
  //   const currentIndex = this.myroutes.findIndex((link) => link == currentUrl);
  //   if (currentIndex > 0) {
  //     const next = this.myroutes[currentIndex - 1];
  //     this.router.navigateByUrl(next);
  //   }
  // }

  nextPage() {
    // this.myUrl += 1;
    let index = this.currentIndex(); // 3
    if (index < this.myroutes.length - 1) {
      // 3, 3
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
