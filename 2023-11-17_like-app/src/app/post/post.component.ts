import { Component , OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy} from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-post',
  styleUrls: ['./post.component.css'],
  template: `
    <div >
      <app-post-list style="border: 1px solid black;" *ngFor="let book of db; index as i" [book]="book" [index]="i"></app-post-list>
    </div>
  
  `,
  
})
export class PostComponent  {

  db : any[] = this.dbService.getData()

  constructor(private dbService : DbService){
    console.log("Post has been initialized");
  }


}
