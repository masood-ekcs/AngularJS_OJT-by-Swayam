import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inputOutput';
  pageNum: number = 0; // starting value is 1 for Process 1 and 0 for Process 2
  // prevButton = this.pageNum <= 1 ? false : true;
  prevButton = false; // at the start page number is 1, so no previous button is required
  nextButton = true;

  numberOfPages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5', 'Page 6'];
  // numberOfPages = [1, 2, 3, 4, 5, 6];

  // Process 2 --- Starts
  // In process 1, some lines of code were repeating,
  // ...so we can put those lines of code in a separate function to avoid repition.
  commonInput(cn1: string, cn2: string) {
    const newN1 = parseInt(cn1);
    const newN2 = parseInt(cn2);
    return [newN1, newN2]; // This is an ARRAY
  }

  // We can use the above function here...
  addNum2(n1: string, n2: string) {
    const [num1, num2] = this.commonInput(n1, n2);
    // where num1 is equal to num[0], and num2 is equal to num[1]
    // 'const [num1, num2]' --> called array desctructuring
    console.log(num1 + num2);
  }

  // // -----   Array desctructuring
  // addNum2(n1: string, n2: string) {
  //   const num = this.commonInput(n1, n2);
  //   console.log(num[0], num[1]);
  // }

  // // --- OR we can make it more simple...
  // addNum2(n1: string, n2: string) {
  //   const num = this.commonInput(n1, n2);
  //   let num1 = num[0];
  //   let num2 = num[1];
  //   console.log(num[0], num[1]);
  // }

  subNum2(n1: string, n2: string) {
    const [num1, num2] = this.commonInput(n1, n2);
    console.log(num1 - num2);
  }
  // Process 2 --- Ends

  // // Process 3 --- Starts
  // logConsole() {
  //   // at the end, this function will be executed on clicking the + button
  //   console.log('Add is Clicked');
  // }

  // // Similarly, we can create one for the Subtract ( - ) button
  // subConsole() {
  //   console.log('Sub is Clicked');
  // }
  // // Process 3 --- Ends

  // Process 4 --- Starts
  logConsole(msgFromUser: string) {
    // the $event will pass the different messages here
    console.log(msgFromUser);
  }
  // Process 4 --- Ends

  // // Process 1 --- Starts
  // // Create two functions for Add and Subtract
  // addNum1(n1: string, n2: string) {
  //   // the input always return a String, so we will convert it to number/integer.
  //   const newN1 = parseInt(n1);
  //   const newN2 = parseInt(n2);
  //   console.log(newN1 + newN2);
  // }

  // subNum1(n1: string, n2: string) {
  //   // the input always return a String, so we will convert it to number/integer.
  //   console.log(parseInt(n1) - parseInt(n2));
  // }
  // // Process 1 --- Ends

  // // Browsing pages, Process 1 --- Starts
  // nextPage() {
  //   this.pageNum += 1;
  // }

  // prevPage() {
  //   this.pageNum -= 1;
  // }
  // // Browsing pages, Process 1 --- Ends

  // Browsing pages, Process 2 --- Starts
  // change the value:  pageNum: number = 0;
  nextPage() {
    this.pageNum++;
    if (this.pageNum == this.numberOfPages.length - 1) {
      // 0 == 5 (6-1)  // Page 1
      // 1 == 5 (6-1)  // Page 2
      // 2 == 5 (6-1)  // Page 3
      // 3 == 5 (6-1)  // Page 4
      // 4 == 5 (6-1)  // Page 5
      // 5 == 5 (6-1)  // Page 6   // true
      this.nextButton = false;
    }
    if (this.pageNum >= 1) {
      this.prevButton = true;
    }
  }

  prevPage() {
    this.pageNum -= 1;
    if (this.pageNum < 1) {
      this.prevButton = false;
    }
    if (this.pageNum <= this.numberOfPages.length - 1) {
      // 0 <= 5 (6-1)
      // 1 <= 5 (6-1)
      // 2 <= 5 (6-1)
      // 3 <= 5 (6-1)
      // 4 <= 5 (6-1)
      // 5 <= 5 (6-1)
      this.nextButton = true;
    }
  }
  // Browsing pages, Process 2 --- Ends
}
