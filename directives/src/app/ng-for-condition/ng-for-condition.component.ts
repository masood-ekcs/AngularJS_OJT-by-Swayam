import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-condition',
  templateUrl: './ng-for-condition.component.html',
  styleUrls: ['./ng-for-condition.component.css'],
})
export class NgForConditionComponent {
  data = [
    { empName: 'Ghabbar Singh', empId: 123, empAge: 48 },
    { empName: 'Thakur Baldev', empId: 279, empAge: 51 },
    { empName: 'Jai', empId: 112, empAge: 23 },
    { empName: 'Veeru', empId: 118, empAge: 27 },
    { empName: 'Basanti', empId: 112, empAge: 19 },
  ];
}
