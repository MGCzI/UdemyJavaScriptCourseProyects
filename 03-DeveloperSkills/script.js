// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log("Hola");
console.log("Como andas");
console.log("Hola!! :D");

//FIXME: This

//TODO: This

//NOTE: This

//REVIEW

//STUB: This

//ANCHOR: This

//SECTION: This

//EXAMPLE: This

//LINK: This

//VIDEO: This

//PHOTO: This

/*--------------------------------------------------- 
                    Execerise 1
---------------------------------------------------*/

const calcTemAmolitud = function (temp) {
    let maxTemp = 0;
    let minTemp = temp[0];

    for (let i = 0; i < temp.length; i++) {
        if (typeof temp[i] === "number") {
            if (maxTemp < temp[i]) {
                maxTemp = temp[i];
            }
            if (minTemp > temp[i]) {
                minTemp = temp[i];
            }
        }
    }
    console.log("Max temp: ", maxTemp);
    console.log("Min temp: ", minTemp);
    console.log("Amplitude: ", maxTemp - minTemp);
};

let temperature = [2, 4, 30, -2, 6, 8, 9, 4, 24];
calcTemAmolitud(temperature);

/*--------------------------------------------------- 
                    Execerise 2
---------------------------------------------------*/

function mergeArrays(aray1, array2) {
    let newArrays = aray1.concat(array2);
    console.log("Our newArrays ", newArrays);
    console.table(newArrays);
}

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

mergeArrays(array1, array2);
10;

function measureKelvin() {
    const measure = {
        type: "temp",
        unit: "celsius",
        //we convert the imput to a number
        value: Number(prompt("Degree celsius")),
    };

    console.table(measure);
    const kelvin = measure.value + 273;
    return kelvin;
}
console.log(measureKelvin());

/*------------------------------
NOTE: 
Otros tipos the console, para objetos y array el table funciona bien
console.table ();
console.warn ();
console.error ();

*/

/* NOTE:
prompt is allways an STRING 
*/

/*--------------------------------------------------- 
                    Challange
---------------------------------------------------*/
function printTemperatures(temp) {
    let str = "";
    for (let i = 0; i < temp.length; i++) {
        console.log("...", temp[i], "°C in", i + 1, "days");
        str += "..." + temp[i] + "°C in " + (i + 1) + " days";
    }
    console.log(str);
}
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

printTemperatures(temp1);
printTemperatures(temp2);
