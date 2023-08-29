import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.css'],
})
export class RadioButtonsComponent implements OnInit {
  selectedGender: string = 'both'; //default value for radio button

  constructor(public myService: DataService) {}

  ngOnInit(): void {
    this.onGenderChange(); // this function will be executed on page load/refresh
  }

  onGenderChange() {
    this.myService.displayGender = this.selectedGender;
    console.log(this.myService.displayGender);
  }
}
