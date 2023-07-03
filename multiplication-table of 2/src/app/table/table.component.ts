import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  numbers: number[] = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.numbers.push(i);
    }
  }

}
