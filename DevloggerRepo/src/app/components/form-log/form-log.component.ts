import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css'],
})
export class FormLogComponent {
  text!: string;

  constructor(private logService: LogService) {}

  getDate(){
    return new Date().toString()
  }

  onSubmit() {
    this.logService.addToLogsData({ id: '1', text: this.text, date: this.getDate() });
  }
  
  clear() {}
}
