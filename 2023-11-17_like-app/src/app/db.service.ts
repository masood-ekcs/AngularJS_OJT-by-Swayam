import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService  {

  private data :any[] = [] 
  
  count = new Subject<number>()

  constructor() { }


  addPost(book : any){
    this.data.push(book)
    console.log(this.data)
    this.count.next(this.data.length)

  }

  getData(){
    console.log("got data");
    return this.data
  }

  like(x : number){
    this.data[x].like = this.data[x].like + 1
  }

  dislike(x : number){
    this.data[x].dislike = this.data[x].dislike + 1
  }


 


}
