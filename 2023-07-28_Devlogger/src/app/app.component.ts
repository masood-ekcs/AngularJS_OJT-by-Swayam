import { Component } from '@angular/core';
import { DataService } from './service/data.service';
DataService;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Devlogger';

  constructor(public myService: DataService) {}
}
