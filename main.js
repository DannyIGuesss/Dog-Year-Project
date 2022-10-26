// declaring a variable with my age
let myAge = 25;

// declaring a variable with the number 2
let earlyYears = 2;

// reassigning and multiplying earlyYears by 10.5
earlyYears *= 10.5;

// subtracting 2 from myAge to accound for the first two years of dogs life and assigning it to laterYears
let laterYears = myAge - 2;

// multiplying and reassigning latersYears by 4
laterYears *= 4;

// getting my age in dog years by adding my earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

// assigning a variable with my name and using the method toLowerCase to return it with all lower case letters
let myName = "Danny".toLowerCase()

// logging and using template literal to insert my variables into a sentence
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
