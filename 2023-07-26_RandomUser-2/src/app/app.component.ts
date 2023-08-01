import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RandomUser-2';
  randomApiData: any = [];

  // @Input() apiResults?: any;

  userDob: any;
  userBirthday: any;

  nameButton: boolean = true;
  emailButton: boolean = false;
  birthdayButton: boolean = false;
  locationButton: boolean = false;

  displayName: boolean = true;
  displayEmail: boolean = false;
  displayBirthday: boolean = false;
  displayLocation: boolean = false;

  constructor(public myService: DataService) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.myService.getDataFromRandomApi().subscribe((data) => {
      this.randomApiData = data;
      this.randomApiData = this.randomApiData.results;
      // console.log(this.randomApiData);
      // return this.randomApiData;
    });
  }

  showHideName() {
    this.displayName = !this.displayName;
    this.nameButton = !this.nameButton;
  }

  showHideEmail() {
    this.displayEmail = !this.displayEmail;
    this.emailButton = !this.emailButton;
  }

  calculateBirthday() {
    this.userDob = this.randomApiData[0].dob.date.toString();
    this.userBirthday = this.userDob.slice(0, 10);
    // return this.userBirthday;
  }

  showHideBirthday() {
    this.displayBirthday = !this.displayBirthday;
    this.birthdayButton = !this.birthdayButton;
    this.calculateBirthday();
  }

  showHideLocation() {
    this.displayLocation = !this.displayLocation;
    this.locationButton = !this.locationButton;
  }
}
