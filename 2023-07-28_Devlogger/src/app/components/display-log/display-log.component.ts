import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-display-log',
  templateUrl: './display-log.component.html',
  styleUrls: ['./display-log.component.css'],
})
export class DisplayLogComponent {
  LogsArray: any[];

  constructor(public myService: DataService) {
    this.LogsArray = myService.displayLogArray;
    // this.LogsArray = myService.myCompleteLogs;
  }

  deleteLog() {}
}
