/* ------------------------------------------
             PDF Exercise 
  -------------------------------------------*/
// Exercise 1: values and Variables
let country = "Uruguay";
let continent = "South America";
let population = 3.474;

console.log(country);
console.log(population);
console.log(continent);

// Exercise 2: Data Types
let isIsland = false;
let language;

console.log(isIsland);
console.log(language);

// Exercise 3: let, const and var
language = "Spanish";
// const country = "Uruguay";
// const continent = "South America";
// const isIsland = false;

// Exercise 4: Basic Operators
console.log(population / 2);

population++;
console.log(population);

console.log(population > 6);
console.log(population < 33);

let description =
  country +
  " is in" +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Exercise 5: String and Template.
description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

// Exercise 6: Taking decisiones: if/ else
if (population > 33) {
  console.log(country + "'s population is above average");
} else {
  console.log(
    country + "'s population is" + (33 - population) + " million below average"
  );
}

// Exercise 7: Type Conversion and Coercion
/* 
Remember: + convert the number to strings
          - convert the string to a number
*/
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // 19 - 13 = 6 -> 6 in string is 54
console.log("19" - "13" + 17); //23
console.log("123" < 57); //False
console.log(5 + 6 + "4" + 9 - 4 - 2); //

// Exercise 8: Equality Operators == vs ===
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
// 2 ways of converting string to number
// numNeighbours = parseInt(numNeighbours);
numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than one border");
} else {
  console.log("No borders");
}

// Exercise 9: Logical Operators
if (language === "English" && population < 50 && !isIsland) {
  console.log("You should live in " + country);
} else {
  console.log(country + "does not meet your criteria");
}

// Exercise 10: The switch Statement.
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3nd place in number of native speakers");
    break;
  case "Hindi":
    console.log("4th place in number of native speakers");
    break;
  case "Arabic":
    console.log("5th most spoken languge");
    break;
  default:
    console.log("Great languages too :D");
    break;
}

// Exercise 11: The Conditional (Trnary) Operators
/*
    condición ? expr1 : expr2 
*/

console.log(
  country + "'s population is " + population > 33
    ? "above"
    : "below" + "average"
);
console.log(
  `${country}s population is ${population > 33 ? `above` : `below`} average`
);

/* --------------------------------------------------
                    Challange 1
---------------------------------------------------- */
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

function calculateBMI(weight, height) {
  return weight / height ** 2;
}

let markBMI = calculateBMI(weightMark, heightMark);
let johnBMI = calculateBMI(weightJohn, heightJohn);

let markHigherBMI = markBMI > johnBMI;

console.log(" Test 1");
console.log("Mark BMI: " + markBMI);
console.log("John BMI: " + johnBMI);
console.log("Is Mark higher than John: " + markHigherBMI);

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

markBMI = calculateBMI(weightMark, heightMark);
johnBMI = calculateBMI(weightJohn, heightJohn);
markHigherBMI = markBMI > johnBMI;

console.log(" Test 2");
console.log("Mark BMI: " + markBMI);
console.log("John BMI: " + johnBMI);
console.log("Is Mark higher than John: " + markHigherBMI);

/* --------------------------------------------------
                    Challange 2
---------------------------------------------------- */
if (johnBMI > markBMI) {
  console.log(" John BMI is higher than Mark");
} else if (johnBMI < markBMI) {
  console.log(" John BMI is lower than Mark");
} else {
  console.log(" John BMI is equal to Mark");
}

/* --------------------------------------------------
                    Challange 3
---------------------------------------------------- */

let dolphinsScore = [90, 108, 89];
let koalasScore = [88, 91, 110];

// let dolphinsScore = [97, 112, 101];
// let koalasScore = [109 , 95, 123];

// let dolphinsScore = [97, 112, 101];
// let koalasScore = [109 , 95, 106];

const minAverageScore = 100;

let dolphinsAverageScore = calculateAverages(dolphinsScore);
let koalasAverageScore = calculateAverages(koalasScore);

function calculateAverages(scores) {
  let average = 0;
  for (let i = 0; i < scores.length; i++) {
    average += scores[i];
  }
  return average / scores.length;
}

console.log(dolphinsAverageScore, koalasAverageScore);

if (koalasAverageScore > dolphinsAverageScore) {
  console.log(" Koalas Team WINS! ");
} else if (koalasAverageScore < dolphinsAverageScore) {
  console.log(" Dolphins Team WINS! ");
} else {
  console.log(" Its a TIE! ");
}

if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= minAverageScore
) {
  console.log(" Koalas Team WINS! ");
} else if (
  koalasAverageScore < dolphinsAverageScore &&
  dolphinsAverageScore >= minAverageScore
) {
  console.log(" Dolphins Team WINS! ");
} else if (
  koalasAverageScore === dolphinsAverageScore &&
  dolphinsAverageScore >= minAverageScore
) {
  console.log(" Its a TIE! ");
} else {
  console.log(" No winer! ");
}

/* --------------------------------------------------
                    Challange 4
---------------------------------------------------- */
// Between  50 - 300 -> 15%
// Differnt 20%
let priceToPay = 275;
let tip =
  priceToPay >= 50 && priceToPay <= 300 ? priceToPay * 0.15 : priceToPay * 0.2;

console.log(
  `The bill was ${priceToPay}, the tip was ${tip} and the final value ${
    priceToPay + tip
  }`
);
