import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageNum: number = 1;

  numberOfPages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6'];

  // Browsing pages, Process 1 --- Starts
  nextPage() {
    this.pageNum += 1;
  }

  prevPage() {
    this.pageNum -= 1;
  }
  // Browsing pages, Process 1 --- Ends
}
