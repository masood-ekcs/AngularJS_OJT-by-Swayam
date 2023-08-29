import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
})
export class TempComponent implements OnInit {
  btnClickValue: number = 0;
  constructor(private myService: DataService) {}

  ngOnInit(): void {
    this.myService.tempShare.subscribe((value: number) => {
      this.btnClickValue += value;
    });
  }
}
