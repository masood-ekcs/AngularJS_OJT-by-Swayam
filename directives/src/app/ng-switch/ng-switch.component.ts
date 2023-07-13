import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent {
  pageNumber = 1;

  inc() {
    if (this.pageNumber < 3) {
      this.pageNumber++;
    } else {
      alert('This was the last page');
    }
  }

  dec() {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    } else {
      alert('This is the first page');
    }
  }
}
