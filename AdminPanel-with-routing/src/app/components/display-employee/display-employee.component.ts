import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent {
  empData: any[];
  constructor(private serviceData: DataService) {
    this.empData = serviceData.getEmployeeRecords();
  }
}
