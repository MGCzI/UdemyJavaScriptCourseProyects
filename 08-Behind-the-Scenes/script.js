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

//THIS
const calcAge = function (birthYear){
  console.log(2022-birthYear);
  console.log(this);
}

const calcAgeArrow = (birthYear)=>{
  console.log(2022-birthYear);
  //This point to the Pareten Scope. In this case the window.
  console.log(this);
}
console.log("Function")
calcAge(1991);

console.log("ARROW Function")
calcAgeArrow(1999);


const maria ={
  year: 1991,
  calcAge: function (){
    console.log(this);
    console.log(2022-this.year)
  }
}

maria.calcAge();