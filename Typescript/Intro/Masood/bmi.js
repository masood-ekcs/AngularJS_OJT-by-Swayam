// 1. Create bmi calculator 
// 2. Create a function called as calculate bmi
// 3. it should accept 2 parameters weight and height
// 4. it should return the user's bmi
var calculateBmi = function (weight, height) {
    var bmi = weight / (height * height);
    return bmi;
};
console.log(calculateBmi(100, 2));
