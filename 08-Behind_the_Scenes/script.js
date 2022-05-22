'use strict';

function printAge(birthYear) {
  const age = 2022 - birthYear;

  if (birthYear >= 1981 && birthYear <= 1996) {
    const str = `You are a millenial ${firstName}`;
    console.log(str);
  }
}
const firstName = 'Maria';
printAge(1991);

/* ------------------------------------------
                  THIS
--------------------------------------------*/
console.log(
  '------------------------------------------\n                  THIS                 \n-------------------------------------------'
);
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  //This point to the Pareten Scope. In this case the window.
  console.log(this);
};
console.log('   NORMAL Function');
calcAge(1991);
console.log('--------------------------');

console.log('     ARROW Function');
calcAgeArrow(1999);
console.log('--------------------------');

const maria = {
  year: 1991,
  calcAge: function () {
    console.log('this', this);
    console.log(2022 - this.year);
  },
};

console.log('Maria age');
maria.calcAge();

const matilda = {
  year: 1990,
};

// We set the function calcAge from maria to matilda, its like she borows the function
matilda.calcAge = maria.calcAge;

console.log('Matilda age');
matilda.calcAge();

const takeFunctionFromObject = maria.calcAge;
// If we see in the console the fucntion, we see its the function in maria
// if we call it here, we will recived undefinde, bc this is undefinde
// takeFunctionFromObject();

/*------------------------------------------
      NORMAL FUNCTION VS ARROW FUNCTION 
------------------------------------------- */
console.log(
  '------------------------------------------\n     NORMAL FUNCTION VS ARROW FUNCTION                 \n-------------------------------------------'
);
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log('this in calcAge (normal function)', this);
    console.log(2022 - this.year);

    /* We cant not use this in a function inside of an function because this lives only in the first function.
    NOT in the inside function. For this we hace 2 solutions
    1. creat a new variable were we save this.
    2. the inside function must be an arrow function, bc arrow function use/ inherit the this of it paretents. */
    // Frist solution.
    /*     const self = this;
    const isMillenial = function () {
      console.log(
        'self in isMillenial (normal function inside a function)',
        self
      );
      console.log('isMillenial', self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  }, */

    // Second solution

    const isMillenial = () => {
      console.log(
        'this in isMillenial (arrow function inside a function)',
        this
      );
      console.log('isMillenial', this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log('This in greet (arrow functin)', this);
    console.log(`Hey ${this.firstName}`);
  },
};
// Here we got undefinde, bc ARROW functions des not get there owns This word. It weill use the this world form its paretens
jonas.greet();
// NOTE: WE SHOULD NEVER USE AN ARROW FUNCTION AS A METHOD IN AN OBJECT!!!
jonas.calcAge();

/* --------------------------------
        ARGUMENTS KEYWORDS.
  only work in normal function 
-----------------------------------*/
console.log(
  '------------------------------------------\n           ARGUMENTS KEYWORD                 \n-------------------------------------------'
);

const addExpr = function (a, b) {
  console.log('arguments in normal function', arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 9, 87);

var addArrow = (a, b) => {
  console.log('arguments in arrow function', arguments);
  return a + b;
};
//  this return an error bs arrow function does not hace the arguments keyword
// addArrow(5, 7, 5);

/* -------------------------------
            PRIMITIVE
-----------------------------------*/
console.log(
  '------------------------------------------\n           PRIMITIVE vs OBJECT                \n-------------------------------------------'
);

let age = 30;
let oldAge = age;
age = 31;
console.log('age:', age);
console.log('oldAge:', oldAge);

const me = {
  name: 'Maria',
  age: 31,
};

const friend = me;
friend.age = 27;

// Here bothe, me and friend has the age of 27
console.log('Frienda: ', friend);
console.log('Me:', me);

const jessica = {
  firstName: 'Jesica',
  lastName: 'William',
  age: 28,
};

console.log('         Copy an Object ¿?');
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// Bothe objects change their lastName. This is bc the copy is a pointer to the actual objects
console.log('Before Marriage: ', jessica);
console.log('After Marriege', marriedJessica);

// How really object should be copy if we want to change one property
const jessica2 = {
  firstName: 'Jesica',
  lastName: 'William',
  age: 28,
  family: ['Alice', 'John'],
};
console.log('         Copy an Object with Object.assign ¿?');
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before Marriage: ', jessica2);
console.log('After Marriege', jessicaCopy);

jessicaCopy.family.push('Bob');
jessicaCopy.family.push('John');
console.log('Before Marriage: ', jessica2);
console.log('After Marriege', jessicaCopy);
console.log(
  'Object.assign, does a shallow copy, the object within the object only copy the pointer, so when you change the object within, ist change in both objects.'
);
