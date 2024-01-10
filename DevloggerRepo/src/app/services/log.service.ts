import { Injectable } from '@angular/core';
import { log } from '../components/form-log/form.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logsData : log[] = []

  constructor() {
    
   }

   addToLogsData(obj : log){
    this.logsData.push(obj)
    console.log(this.logsData);
    
   }

   getData(){
    return this.logsData
   }
}
