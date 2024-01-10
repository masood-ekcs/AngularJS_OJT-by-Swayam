// Array's // Objects // Classes  || OOP's -> Object Oriented Programming

// Creating an object
let emp1 = {
    name: "Rahul",
    empId: 1232,
    booldGroup: "B"
}


// Creating a class
class Employee {
    name: String;
    empId: number;
    bloodGroup: String;
    position: String;

    // creating a constructore with the parameters
    constructor(name: String, empId: number, bloodGroup: String, position: String) {
        this.name = name;
        this.empId = empId;
        this.bloodGroup = bloodGroup;
        this.position = position;
    }

    adminLogin(): boolean {
        if (this.empId == 1) {
            return true
        }
        return false
    }
}

// creating object
let masood = new Employee("Masood", 1, "AB+", "Manager");
let sunil = new Employee("Sunil", 2, "B+", "Associate");
let chandan = new Employee("Chandan", 3, "O+", "Associate");

// calling the method with the help of object
console.log(sunil.adminLogin()) // this will print true/false