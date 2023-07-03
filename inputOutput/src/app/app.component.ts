import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'inputOutput';
  pageNum: number = 0;
  prevButton = false;
  nextButton = true;

  // numberOfPages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];
  numberOfPages = [0, 1, 2, 3, 4, 5];

  commonInput(cn1: string, cn2: string) {
    const newN1 = parseInt(cn1);
    const newN2 = parseInt(cn2);
    return [newN1, newN2];
  }

  addNum(n1: string, n2: string) {
    const [num1, num2] = this.commonInput(n1, n2); // 'const [num1, num2]' --> called array desctructuring

    const num = this.commonInput(n1, n2);
    // let num1 = num[0];
    // let num2 = num[1];
    // console.log(num[0], num[1])

    console.log(num1 + num2);
  }

  subNum(n1: string, n2: string) {
    const [num1, num2] = this.commonInput(n1, n2);
    console.log(num1 - num2);
  }

  logConsole(msgFromUser: string) {
    console.log(msgFromUser);
  }

  // subConsole() {
  //   console.log('Sub is Clicked')
  // }

  nextPage() {
    this.pageNum += 1;
    if (this.pageNum == this.numberOfPages.length - 1) {
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
      // this.prevButton = false;
      this.nextButton = true;
    }
  }
}
