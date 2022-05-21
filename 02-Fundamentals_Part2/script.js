"use strict";

/* ------------------------------------------
             PDF Exercise 
  -------------------------------------------*/
const countryName = 0;
const countryPopulation = 1;
const countryCapitalCity = 2;

let countryData_1 = ["Uruguay", 3.474, "Montevideo"];
let countryData_2 = ["Argentna", 45.38, "Buenos Aires"];
let countryData_3 = ["Italia", 59.55, "Roma"];
let countryData_4 = ["Netherlands", 17.44, "Amsterdam"];

// Exercise 1: Function
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital City is ${capitalCity}`;
}

console.log(describeCountry("Uruguay", 3.474, "Montevideo"));
console.log(describeCountry("Argentna", 45.38, "Buenos Aires"));
console.log(describeCountry("Italia", 59.55, "Roma"));
console.log(describeCountry("Netherlands", 17.44, "Amsterdam"));
//-------------------------------------------------------------

// Exercise 2: Function Declarations vs Expressions
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  return ((population * 100) / worldPopulation).toFixed(2);
}

const percentageOfWorld2 = function (population) {
  return ((population * 100) / worldPopulation).toFixed(2);
};

console.log("PercentOfWorld 01");
console.log(percentageOfWorld1(countryData_1[countryPopulation]));
console.log(percentageOfWorld1(countryData_2[countryPopulation]));
console.log(percentageOfWorld1(countryData_3[countryPopulation]));
console.log(percentageOfWorld1(countryData_4[countryPopulation]));

console.log("PorcentOfWorld 02");
console.log(percentageOfWorld2(countryData_1[countryPopulation]));
console.log(percentageOfWorld2(countryData_2[countryPopulation]));
console.log(percentageOfWorld2(countryData_3[countryPopulation]));
console.log(percentageOfWorld2(countryData_4[countryPopulation]));
//-------------------------------------------------------------

// Exercise 3: Arrow Functions.
const percentageOfWorld3 = (population) =>
  ((population * 100) / worldPopulation).toFixed(2);

console.log("PorcentOfWorld 03");
console.log(percentageOfWorld3(countryData_1[countryPopulation]));
console.log(percentageOfWorld3(countryData_2[countryPopulation]));
console.log(percentageOfWorld3(countryData_3[countryPopulation]));
console.log(percentageOfWorld3(countryData_4[countryPopulation]));
//-------------------------------------------------------------

// Exercise 4: Function Calling Other Functions Functions
function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${porcentOfWorld1(
    population
  )}% of the world.`;
}

console.log(
  describePopulation(
    countryData_1[countryName],
    countryData_1[countryPopulation]
  )
);
console.log(
  describePopulation(
    countryData_2[countryName],
    countryData_2[countryPopulation]
  )
);
console.log(
  describePopulation(
    countryData_3[countryName],
    countryData_3[countryPopulation]
  )
);
console.log(
  describePopulation(
    countryData_4[countryName],
    countryData_4[countryPopulation]
  )
);
//-------------------------------------------------------------

// Exercise 5: Introduction to Arrays;
let population = [
  countryData_1[countryPopulation],
  countryData_2[countryPopulation],
  countryData_3[countryPopulation],
  countryData_4[countryPopulation],
];

console.log(population);
console.log(population.length === 4);

let percentages = [];
for (let i = 0; i < population.length; i++) {
  percentages.push(percentageOfWorld1(population[i]));
}

console.log(percentages);
//-------------------------------------------------------------

//Exercise 5: Basic Arrays Operations.
let neighbors = ["Chile", "Bolivia", "Paraguay", "Brazil", "Uruguay"];
//Add element to an array
neighbors.push("Utopia");
//Eliminate elements of an array
neighbors.pop();

if (!neighbors.includes("Germany"))
  console.log(`Probably not a central European country :D`);

let index = neighbors.indexOf("Paraguay");
neighbors[index] = "Peru";
//-------------------------------------------------------------

//Exercise 6: Introducction to Objects
const myCountry = {
  country: "Uruguay",
  capital: "Montevideo",
  language: "Spanish",
  population: 3.474,
  neighbors: ["Argentna", "Brazil"],
};

console.log(myCountry);
//-------------------------------------------------------------

//Exercise 7: Dot vs Bracket Notation.
console.log(
  ` ${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbors, and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);

myCountry["population"] -= 2;
console.log(myCountry);
//-------------------------------------------------------------

// Exercise 8: Object Methods

//-------------------------------------------------------------
// Exercise 9: Iteration: The for Loop
for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
//-------------------------------------------------------------

// Exercise 10: Looping Arrays, Breaking and Continuing
let percentages2 = [];
for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}
for (let i = 0; i < percentages2.length; i++) {
  if (percentages2[i] !== percentages[i]) {
    console.log("Error");
    break;
  }
}
//-------------------------------------------------------------

// Exercise 11: Looping Backwards and Loops in Loops
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour ${listOfNeighbours[i][j]}`);
  }
}
//-------------------------------------------------------------

// Exercise 12: The while Loop
let percentages3 = [];
let i = 0;
while (i < population.length) {
  percentages3.push(percentageOfWorld1(population[i]));
  i++;
}

//-------------------------------------------------------------
// Exercise 13:
//-------------------------------------------------------------
// Exercise 14:
//-------------------------------------------------------------

/* --------------------------------------------------
                    Challange 1
---------------------------------------------------- */

let koalasScores = [65, 54, 49];
let dolphinsScores = [44, 23, 71];

function calcAverag(scores) {
  let averag = 0;

  for (let i = 0; i < scores.length; i++) {
    averag += scores[i];
  }
  return averag / scores.length;
}

let averagOf3 = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let koalasAverag = calcAverag(koalasScores);
let dolphinAverag = calcAverag(dolphinsScores);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins wins! ( ${avgDolphins} vs ${avgKoalas} )`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    console.log(`Koalas wins! ( ${avgDolphins} vs ${avgKoalas} )`);
  } else {
    console.log("No winners");
  }
}

checkWinner(dolphinAverag, koalasAverag);

/* --------------------------------------------------
                    Challange 2
---------------------------------------------------- */

let calcTip = (tip) => (tip >= 50 && tip <= 100 ? tip * 0.15 : tip * 0.2);

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(total);

/* --------------------------------------------------
                    Challange 2
---------------------------------------------------- */
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (todayYear) {
  //     return todayYear - this.birthYear;
  //   },

  //   Create a function and a new properties of the objects
  calcAge: function (todayYear) {
    this.age = todayYear - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge(2020)}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? `a` : `no`} dirvers licence`;
  },
};
//Add properties to an objects
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschtman";

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

console.log(jonas.calcAge(2020));

/* --------------------------------------------------
                    Challange 3
---------------------------------------------------- */
console.log(jonas.calcAge(2020));
console.log(
  `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${
    jonas.hasDriversLicense ? `a` : `no`
  } dirvers licence`
);
console.log(jonas.getSummery());

/* --------------------------------------------------
                    Challange 3
---------------------------------------------------- */
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  wight: 78,
  height: 1.68,

  calcBMI: function () {
    this.bmi = this.wight / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  wight: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.wight / (this.height * this.height);
    return this.bmi;
  },
};
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI ( ${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s ( ${mark.bmi} )`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI ( ${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s ( ${john.bmi} )`
  );
} else {
  console.log(`Equal BMI`);
}
