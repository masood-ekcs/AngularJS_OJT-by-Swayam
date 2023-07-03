import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }

  myUrl: number = 0;
  prevButton = false;
  nextButton = true;
  myroutes = ['/', '/about', '/contact'];


  currentIndex() {
    const currentUrl = this.router.url;
    const currentIndex = this.myroutes.findIndex((link) => link == currentUrl)
    return currentIndex
  }

  hasNext(): boolean {
    let index = this.currentIndex();
    return index != this.myroutes.length - 1
  }

  hasPrevious(): boolean {
    let index = this.currentIndex();
    return index != 0
  }


  nextPage() {
    let index = this.currentIndex();
    if (index < this.myroutes.length - 1) {
      const next = this.myroutes[index + 1]
      this.router.navigateByUrl(next)
    }
  }

  prevPage() {
    let index = this.currentIndex();
    if (index > 0) {
      const next = this.myroutes[index - 1]
      this.router.navigateByUrl(next)
    }
  }


}
