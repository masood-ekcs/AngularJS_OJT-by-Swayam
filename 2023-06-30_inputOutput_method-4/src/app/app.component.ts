import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Process 4 --- Starts

  logConsole(msgFromUser: string) {
    // this will accept message from the user through $event
    // the $event will pass different messages here
    console.log(msgFromUser);
  }
  // Process 4 --- Ends
}
