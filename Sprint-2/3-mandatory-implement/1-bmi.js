// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
    // return the BMI of someone based off their weight and height
    if (height <= 0) {
        throw new Error("Height must be greater than zero.");
    }
    if (weight <= 0) {
        throw new Error("Weight must be greater than zero.");
    }
    const bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(1)); // Return BMI to 1 decimal place
}
// Example usage:
 const weight = 70; // in kg
 const height = 1.73; // in metres
 const bmi = calculateBMI(weight, height);
 console.log(`Your BMI is: ${bmi}`); // Output: Your BMI is: 23.4

