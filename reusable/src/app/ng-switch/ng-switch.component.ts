import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  pageNumber = 1

  next() {
    this.pageNumber++
  }

  prev() {
    this.pageNumber--;
  }
}
