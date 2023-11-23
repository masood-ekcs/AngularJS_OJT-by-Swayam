import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent{
  // Need manage state
  // sort
  // ngOnInit(): void {
  //   console.log("refreshed");
  // }

  changeD(){
    console.log("App was refreshed / rerendered");
  }
}
