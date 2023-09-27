import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userDbFromParent!: string;
  alertMessageFromParentComponent!: string;

  // this will capture the $event value and store it in the 'userDbFromParent' local variable
  // the 'userDbFromParent' value is then sent to other child component
  getData(value: string) {
    this.userDbFromParent = value;
    console.log('value from Parent component ', this.userDbFromParent);

    if (this.userDbFromParent === '') {
      // alert('No Data Available...');
      this.alertMessageFromParentComponent = 'The Value cannot be Empty';
    } else {
      // alert('User input is... ' + this.checkValue);
      this.alertMessageFromParentComponent = 'Value added, thanks!';
    }
  }
}
