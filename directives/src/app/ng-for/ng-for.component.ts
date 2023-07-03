import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  data = [
    {
      empName: "Swayam",
      empId: 1233,
      empAge: 50
    },
    {
      empName: "Masood",
      empId: 12,
      empAge: 30
    },
    {
      empName: "Vaishal",
      empId: 112,
      empAge: 23
    }
  ]
}
