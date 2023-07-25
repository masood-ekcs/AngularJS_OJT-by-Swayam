import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RandomUser';
  randomApiData: any = [];

  constructor(public myService: DataService) {}

  getData() {
    this.myService.getDataFromRandomApi().subscribe((data) => {
      this.randomApiData = data;
      this.randomApiData = this.randomApiData.results;
      console.log(this.randomApiData);
    });
  }

  ngOnInit() {
    this.getData();
  }
}
