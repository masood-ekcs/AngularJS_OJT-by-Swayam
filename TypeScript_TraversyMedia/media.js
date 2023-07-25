// Classes
var Person = /** @class */ (function () {
    // constructor() {
    //   console.log(123);
    // }
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
// const brad = new Person();
// const mike = new Person();
var brad = new Person(1, 'Brad Traversy');
var mike = new Person(2, 'Mike Jordan');
console.log(brad, mike);
