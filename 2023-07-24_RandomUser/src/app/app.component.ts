import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RandomUser';
  randomApiData: any = [];

  // @Input() apiResults?: any;

  userDob: any;
  userBirthday: any;

  displayName = false;
  showNameButton = true;
  hideNameButton = false;

  displayEmail = false;
  showEmailButton = true;
  hideEmailButton = false;

  displayBirthday = false;
  showBirthdayButton = true;
  hideBirthdayButton = false;

  displayLocation = false;
  showLocationButton = true;
  hideLocationButton = false;

  constructor(public myService: DataService) {}

  getData() {
    this.myService.getDataFromRandomApi().subscribe((data) => {
      this.randomApiData = data;
      this.randomApiData = this.randomApiData.results;
      // console.log(this.randomApiData);
      return this.randomApiData;
    });
  }

  ngOnInit() {
    this.getData();
  }

  showName() {
    this.displayName = true;
    this.showNameButton = false;
    this.hideNameButton = true;
  }

  hideName() {
    this.displayName = false;
    this.showNameButton = true;
    this.hideNameButton = false;
  }

  showEmail() {
    this.displayEmail = true;
    this.showEmailButton = false;
    this.hideEmailButton = true;
  }

  hideEmail() {
    this.displayEmail = false;
    this.showEmailButton = true;
    this.hideEmailButton = false;
  }

  calculateBirthday() {
    this.userDob = this.randomApiData[0].dob.date.toString();
    this.userBirthday = this.userDob.slice(0, 10);
    return this.userBirthday;
  }

  showBirthday() {
    this.displayBirthday = true;
    this.showBirthdayButton = false;
    this.hideBirthdayButton = true;
    this.calculateBirthday();
  }

  hideBirthday() {
    this.displayBirthday = false;
    this.showBirthdayButton = true;
    this.hideBirthdayButton = false;
  }

  showLocation() {
    this.displayLocation = true;
    this.showLocationButton = false;
    this.hideLocationButton = true;
  }
  hideLocation() {
    this.displayLocation = false;
    this.showLocationButton = true;
    this.hideLocationButton = false;
  }

  //
}
