import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  // randomApiData: any = [];

  constructor(public myService: DataService) {}
  ngOnInit() {
    this.myService.getData();
  }

  // getData() {
  //   this.myService.getDataFromRandomApi().subscribe((data) => {
  //     this.randomApiData = data;
  //     this.randomApiData = this.randomApiData.results;
  //     // console.log(this.randomApiData);
  //     return this.randomApiData;
  //   });
  // }
}
