"use strict";

let a = +prompt("Įveskite kiekį: ");
let b = +prompt("Įveskite kiekį: ");
let c = +prompt("Įveskite kiekį: ");
let array = [a, b, c];

let jumpings = 3;

let totalJumps = 0;

function caculateAverage(array){
let sum = 0;
let i = 0;
while (i < array.length){
    sum += array[i];
    i++;
}
return sum / array.length;

}

for (let index = 0; index < array.length; index++){
totalJumps += array[index];

}

const average = caculateAverage(array);
console.log(totalJumps);
console.log(average);