'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // The object must have this names exacly as properties.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },
};

/*---------------------------------
      DESTRUCTURING ARRAYS
--------------------------------*/
console.log(
  '---------------------------------\n      DESTRUCTURING ARRAYS        \n--------------------------------'
);

const array = [4, 5, 6, 7];
const a = array[0];
const b = array[1];
const c = array[2];
const d = array[3];

// Doing this we assign the variable x,y,w,z, one element of the array
const [x, y, w, z] = array;
console.log('x:', x, '\ny:', y, '\nw:', w, '\nz:', z);
console.log('array', array);

const [first, second] = restaurant.categories;
console.log('first: ', first, '\nsecond: ', second);

// if we want to skip a value of the array, we just need to leave the spacer.
let [first1, , third] = restaurant.categories;
console.log('first1: ', first1, '\nthird: ', third);

// Switching variables
// We need to creat a new variable
const temp = first1;
first1 = third;
third = temp;
console.log('first1: ', first1, '\nthird: ', third);

// redefine the array.
[first1, third] = [third, first1];
console.log('first1: ', first1, '\nthird: ', third);

// Receive 2 return valuers from a function.
const [starter, main] = restaurant.order(2, 0);
console.log('Starter', starter, '\nMain', main);

// Nested arrays
const nested = [2, 3, [5, 8]];
const [i, , j] = nested;
console.log('i:', i, '\nj:', j);

// How to grab the nested array
const [k, , [l, m]] = nested;
console.log('k:', k, '\nl:', l, '\nm:', m);

// Default values, if we dont put default values, when the position of the array doesnt exist it will return undefined undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log('p:', p, '\nq:', q, '\nr:', r);

/*---------------------------------
      DESTRUCTURING OBJECT
--------------------------------*/
console.log(
  '---------------------------------\n      DESTRUCTURING OBJECT        \n--------------------------------'
);

//we creat the variables with the name of the properties
const { name, openingHours, categories } = restaurant;
console.log(
  'names: ',
  name,
  '\nopeningHours: ',
  openingHours,
  '\ncategories: ',
  categories
);

//If we want to creat variables with different names.
const {
  name: restaurantNames,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(
  'restaurantNames: ',
  restaurantNames,
  '\nhours: ',
  hours,
  '\ntags: ',
  tags
);

//Default values for properties.
const { menu = [], starterMenu: firstDish = [] } = restaurant;
console.log('Menu: ', menu, '\nfirstDish: ', firstDish);

//Mutatung variables.
let f = 111;
let g = 333;
const obj = { f: 23, g: 7, c: 11 };
({ f, g } = obj);
console.log('f:', f, '\ng:', g);

//Nested Objects
const {
  fri: { open: o, close: cl },
} = openingHours;
console.log('Open Hour o: ', o, '\nClose Hours cl:', cl);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Garcia Lorca',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: '26 de Marzo',
  starterIndex: 3,
});

/*---------------------------------
      THE SPREAD OPERATOR
--------------------------------*/
console.log(
  '---------------------------------\n      THE SPREAD OPERATOR        \n--------------------------------'
);
