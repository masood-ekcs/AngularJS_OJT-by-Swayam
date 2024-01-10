// Polymorphism

// the function add() is same in all the three classes

class Math {
    add(a, b) {
        return a + b
    }
}

class Math1 extends Math { // extends the Math class
    add(a, b, c) {  // this will override the add(a,b) from Math class and will add the three values
        return a + b + c
    }
}


class Math2 extends Math1 { // extends the Math1 class
    add(firstName, lastName) {
        return firstName + " " + lastName
    }
}



let m1 = new Math()
console.log(m1.add(2, 3)) // output --> 5
let m2 = new Math1()
console.log(m2.add(2, 5, 4)) // output --> 11
let m3 = new Math2()
console.log(m3.add("Ayush", 'Addhyan')) // output --> Ayush Addhyan

console.log(m3.add(9, 8)) // output --> 9 8

// Hmne saare inhertied class same naam se banaye hai, toh ye baaki saare ko override kar rha hai
