import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  empDetails: any[] = [];
  constructor() {}

  createNewEmployee(data: any) {
    this.empDetails.push(data);
  }

  getEmployeeRecords() {
    return this.empDetails;
  }
}
