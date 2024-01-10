// OOPS – Object Oriented Programming

// class User {
//     constructor() {
//         console.log("yeh function call ho raha hai")
//     }
// }

// let userX = new User()
// new – class ka object banane ke liye likhte hain



class User {
    // constructor(nme, ag, ads) { // these are parameters of the function
    //     this.name = nme // 'this' means of this class
    //     this.age = ag
    //     this.address = ads
    // }
    // }

    // let userY = new User("Ayush", 23, "Hospital Road") // these are actual values to the parameters
    // // Ye user1 naam ka object banayega aur usme kaun kaun si properties hongi (name, age, address)

    // console.log(userY.name, userY.age)




    setName(name) {
        this.name = name
        // Ye function ek name parameter accept krega aur user1 mein ek property add krdega name
    }
    setAge(age) {

        this.age = age
    }
    setAddress(address) {

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

    getDetails() {	// or we can return all the values collectively
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
    }
}




//let user1 = new User("Ayush", 23, "Hospital Road")
let user1 = new User()
user1.setName("Ayush")
user1.setAge(30)
user1.setAddress("Hospital Road, Bihar")
let details = user1.getDetails()
console.log(details)
// Ye user1 naam ka object banayega aur usme kaun kaun si properties hongi (name, age, address)


// // trick to find out the time a code takes to execute
// // create a variable 'a' at the beginning of the code…
// // create a varibale 'b' at the end of the code…
// // substract b - a to get the time elapsed
let a = Date.now()  // will give milli seconds since 1st January 1970

// let c = 0

// for (let i = 0; i < 100000000; i++) {
//     c += 1000

// }

let b = Date.now()

let time = b - a
console.log(time)



