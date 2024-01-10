import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';
import { log } from '../form-log/form.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logsData !: log[]
  constructor(private logService: LogService){}

  ngOnInit(): void {
      this.logsData = this.logService.getData()
  }

}
