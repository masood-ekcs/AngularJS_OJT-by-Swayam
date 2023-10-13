import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Process 3 --- Starts

  logConsole() {
    // this function is linked with the addBtnClicked EventEmitter…
    // at the end, this function will be executed on clicking the ( + ) button

    console.log('Add is Clicked');
  }

  // Similarly, we can create one for the Subtract ( - ) button
  subConsole() {
    console.log('Sub is Clicked');
  }
  // Process 3 --- Ends
}
