import { Component, Input } from '@angular/core';
import { Post } from './post.model'; // model imported from post.model.ts


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() newPost !: Post;
  // assigned the values from Post model to the newPost variable which can be called in the html

  // constructor() {
  //   this.newPost = new Post("Google", "google.com", 0, 0)
  // assigned hard-code values to the newPost variable here
  // }


}

