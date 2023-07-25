// Classes
class Person {
  id: number;
  name: string;

  // constructor() {
  //   console.log(123);
  // }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// const brad = new Person();
// const mike = new Person();

const brad = new Person(1, 'Brad Traversy');
const mike = new Person(2, 'Mike Jordan');

console.log(brad, mike);
