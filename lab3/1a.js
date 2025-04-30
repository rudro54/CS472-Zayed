"use strict";
//using arrow function 
const computeSumOfSquares = (arr)=> arr.reduce((sum,num)=>sum+num*num,0);
console.log("The squared sum of your given array is :",computeSumOfSquares([1,2,3]));