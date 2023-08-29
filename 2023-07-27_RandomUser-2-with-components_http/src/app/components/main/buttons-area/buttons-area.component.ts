import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-buttons-area',
  templateUrl: './buttons-area.component.html',
  styleUrls: ['./buttons-area.component.css'],
})
export class ButtonsAreaComponent {
  @Input() randomOutput!: any;

  userDob: any;
  userBirthday: any;

  nameButton: boolean = true;
  emailButton: boolean = false;
  birthdayButton: boolean = false;
  locationButton: boolean = false;

  constructor(public myService: DataService) {}

  showHideName() {
    this.myService.displayName = !this.myService.displayName;
    this.nameButton = !this.nameButton;
    // console.log('Show Hide Name Function');
  }

  // tempFunc() {
  //   this.nameButton = !this.nameButton;
  //   console.log('Temp Function');
  // }

  showHideEmail() {
    this.myService.displayEmail = !this.myService.displayEmail;
    this.emailButton = !this.emailButton;
  }

  calculateBirthday() {
    this.userDob = this.myService.randomApiData[0].dob.date.toString();
    this.myService.userBirthday = this.userDob.slice(0, 10);
    // return this.userBirthday;
  }

  showHideBirthday() {
    this.myService.displayBirthday = !this.myService.displayBirthday;
    this.birthdayButton = !this.birthdayButton;
    this.calculateBirthday();
  }

  showHideLocation() {
    this.myService.displayLocation = !this.myService.displayLocation;
    this.locationButton = !this.locationButton;
  }

  refresh() {
    this.myService.getData();
  }
}
