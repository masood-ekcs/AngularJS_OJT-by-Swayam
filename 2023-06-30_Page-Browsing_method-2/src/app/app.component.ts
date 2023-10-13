import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageNum: number = 1;

  numberOfPages = [
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
    'Page 5',
    'Page 6',
    'Page 7',
    'Page 8',
  ];

  // prevButton = this.pageNum <= 1 ? false : true;
  prevButton = false; // at the start page number is 1, so no previous button is required
  nextButton = true;

  // Browsing pages, Process 2 --- Starts
  // change the value:  pageNum: number = 0;
  nextPage() {
    this.pageNum++;
    if (this.pageNum == this.numberOfPages.length) {
      // 1 == 6  // Page 1
      // 2 == 6  // Page 2
      // 3 == 6  // Page 3
      // 4 == 6  // Page 4
      // 5 == 6  // Page 5
      // 6 == 6  // Page 6   // true
      this.nextButton = false;
    }
    if (this.pageNum >= 1) {
      this.prevButton = true;
    }
  }

  prevPage() {
    this.pageNum -= 1;
    if (this.pageNum <= 1) {
      // 1 <= 1  // Page 1   // true
      // 2 <= 1  // Page 2
      // 3 <= 1  // Page 3
      // 4 <= 1  // Page 4
      // 5 <= 1  // Page 5
      // 6 <= 1  // Page 6
      this.prevButton = false;
    }
    if (this.pageNum < this.numberOfPages.length) {
      this.nextButton = true;
    }
  }
  // Browsing pages, Process 2 --- Ends
}
