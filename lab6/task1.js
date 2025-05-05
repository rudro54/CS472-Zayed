"use strict"

let x = {
    firstName: "a",
    lastName: "b",
    grades: [],
    inputNewGrades: function (newGrade) {this.grades.push(newGrade)},
    computeAverageGrade: function () {
        return this.grades.reduce((x,y) => x+y) / this.grades.length
        },
    }

console.log(x)
x.inputNewGrades(50)
x.inputNewGrades(70)
console.log(x)
console.log(x.computeAverageGrade())

