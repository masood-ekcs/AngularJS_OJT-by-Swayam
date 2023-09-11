import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() myStoredData: any[] = [];
  mySavedData: any;
  cols: any;
  myCount!: number;
  showRows: number = 1;

  ngOnInit(): void {
    this.mySavedData = this.myStoredData;
    for (let i = 0; i < this.mySavedData.length; i++) {
      this.mySavedData[i].srNo = i + 1;
    }

    // this.myCount = this.mySavedData.length;

    this.cols = [
      { field: 'srNo', header: 'S.No.' },
      { field: 'password', header: 'Password' },
      { field: 'userId', header: 'Email' },
    ];
  }
}
