import { Car } from "./interface"; // importing datatype from the interface.ts
class Cars implements Car { // creating a new class here by importing data types from the interface.ts
    name: String;
    model: String;
    year: number;
    color: String;
    tyre: String; // additional data type added to the class

    // creating a constructor with additional parameter, 'tyre'
    constructor(name: String, model: String, year: number, color: String, tyre: String) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    // simple method
    carStop(): String {
        return "Car Stop"
    }


    carRun(): String {
        return "Car Run"
    }
}

// creating new object
let car1 = new Cars("Maruti 100", "100", 1995, "Red", "c") // we're creating object of class Cars
let car2 = new Cars("Maruti Omni", "Omni", 1998, "Blue", "c")

let car3: Car = {
    name: "Maruti",
    model: "300",
    year: 2004,

    //    tyre: 'red' // this will give an error because the 'Car' interface (from interface.ts) doesn't have the 'tyre' data type
}


console.log(car1.carRun())