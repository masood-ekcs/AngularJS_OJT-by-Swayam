import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { userModel } from '../input-form/form.model';

@Component({
  selector: 'app-display-log',
  templateUrl: './display-log.component.html',
  styleUrls: ['./display-log.component.css'],
})
export class DisplayLogComponent implements OnInit {
  LogsData!: userModel[];

  constructor(public myService: DataService) {}

  ngOnInit(): void {
    this.LogsData = this.myService.getData();
  }

  deleteLog() {}
}
