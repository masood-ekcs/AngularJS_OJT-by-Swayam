import { Component , OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-navbar',
  template: `
    <div style="display: flex; justify-content: space-between;">
      <h1>Logo</h1>
      <h1>Count : {{this.count}}</h1>
    </div>
   
  `

})
export class NavbarComponent implements OnInit{
  
  constructor(private dbService : DbService){}
  count : number = 0

  
  ngOnInit(): void {
    this.dbService.count.subscribe(value => {
      this.count = value
    })
  }

 
}
