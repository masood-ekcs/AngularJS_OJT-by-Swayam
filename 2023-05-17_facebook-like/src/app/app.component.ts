import { Component } from '@angular/core';
import { Post } from './post/post.model'; // to import the Post model from post.model.ts
import { DbService } from 'src/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dbService: DbService) {}

  // title = 'facebook-like';
  newPostApp: Post[] = []; // newPostApp is a variable which is equal to the Post model. and the data-type of the Post model is an array

  cardCount!: number;

  sortedArray: Post[] = [];

  sortArray(): Post[] {
    // Post[] –––> means, the sort function will be an array with the value of Post
    return this.newPostApp.sort(
      (a: Post, b: Post) => b.totalCount - a.totalCount
    );
  }

  createPost(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log(title.value)
    // console.log(link.value)
    this.newPostApp.push(new Post(title.value, link.value, 0, 0));
    this.dbService.countCard();
    this.cardCount = this.dbService.totalCardCount;

    return false;
  }
}
