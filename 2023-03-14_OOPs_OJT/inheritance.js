// example of inheritance
class User { // this is our base/parent class, with name, age and address
    constructor(name, age, address) {
        this.name = name
        this.age = age
        this.address = address
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getAddress() {
        return this.address
    }
}


// let user1 = new User("Ayush", 23, "Hospital Road, Sitamarhi")
// console.log(user1.name)

// lets create a new inheritance class…
class SalesEmployee extends User { // extends will extend the properties for the User class
    constructor(name, age, address, target) {
        // Sales employee mein user ki saari property honi chahiye with an additional 'target' property
        super(name, age, address) // super is a method to call the parent Class. it is similar to 'this.User(name, age, address)
        // Ye line likhne ka matlab hai ki parent class constructor call ho jaayga

        this.target = target
        // matlab name, age, address isme aa jaayega

    }

    getTarget() {
        return this.target
    }
}

let sales1 = new SalesEmployee("Akash", 23, "Hospital road, Sitamarhi", 100000)
console.log(sales1.getName())
console.log(sales1.getTarget())




// Real life use case
// Shape naam ki class hogi - Properties - line width, color, height - Base class
// Square - Properties (shape se lake aa jaayega) | methods - height and width equal krne wala function
// Rectangle - 
// Circle -
// FreeHand - 
