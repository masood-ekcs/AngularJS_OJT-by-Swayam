import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { userLog } from '../input-form/form.model';

@Component({
  selector: 'app-display-log',
  templateUrl: './display-log.component.html',
  styleUrls: ['./display-log.component.css'],
})
export class DisplayLogComponent implements OnInit {
  LogsArray!: userLog[];

  constructor(public myService: DataService) {}

  ngOnInit(): void {
    this.LogsArray = this.myService.getData();
  }

  deleteLog() {}
}
