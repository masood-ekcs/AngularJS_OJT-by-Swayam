export class Post {
  title: String
  link: String
  like: number
  dislike: number
  totalCount!: number


  constructor(title: String, link: String, like: number, dislike: number) {
    this.title = title;
    this.link = link;
    this.like = like;
    this.dislike = dislike;
    // this.totalCount = this.like - this.dislike
  }

  count(): void {
    this.totalCount = this.like - this.dislike
  }

  addLike(): void { // void is used if we doesn't want to return anything
    this.like = this.like + 1
    this.count()
  }

  addDislike(): void {
    this.dislike += 1
    this.count()
  }

}