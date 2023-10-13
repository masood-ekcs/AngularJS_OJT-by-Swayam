import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inputOutput method 1';

  // Process 1 --- Starts

  // Create two functions for Add and Subtract
  addNum1(n1: string, n2: string) {
    console.log(n1, n2);
    // the input always return a String, so we will convert it to number/integer.
    const newN1 = parseInt(n1);
    const newN2 = parseInt(n2);
    console.log(newN1 + newN2);
  }

  subNum1(n1: string, n2: string) {
    // the input always return a String, so we will convert it to number/integer.
    console.log(parseInt(n1) - parseInt(n2));
  }
  // Process 1 --- Ends

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
}
