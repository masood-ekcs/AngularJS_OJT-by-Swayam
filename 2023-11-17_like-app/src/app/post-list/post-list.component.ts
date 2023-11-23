import { Component , Input, OnChanges, SimpleChanges} from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-post-list',
  template: `
    <h1>{{book.title}}</h1>
      <!-- <img [src]="book.image" alt="book image"> -->
      <button (click)="likeBook()">Like {{book.like}}</button>
      <button (click)="dislikeBook()">Dislike {{book.dislike}}</button>
  `
})
export class PostListComponent {
  @Input() book !: any
  @Input() index !: any

  constructor(private dbService : DbService){}

  likeBook(){
    this.dbService.like(this.index)
  }

  dislikeBook(){
    this.dbService.dislike(this.index)
  }

 
  
}
