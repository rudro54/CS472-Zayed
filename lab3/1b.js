"use strict";

console.log("Odd numbers from your give array are :");
const printOddNumbersOnly = function(arr){
    arr.filter(item=>item%2!=0).forEach(item=>console.log(item));
};
printOddNumbersOnly([1,2,3,4,5]);

