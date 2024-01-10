// 1. Create bmi calculator 
// 2. Create a function called as calculate bmi
// 3. it should accept 2 parameters weight and height
// 4. it should return the user's bmi


const calculateBMI = (weight: number, height: number): number => {

    let bmi = weight / (height * height)
    return bmi
}

console.log(calculateBMI(100, 2))