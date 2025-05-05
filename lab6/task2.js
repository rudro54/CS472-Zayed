"use strict"

function Student (firstName, lastName, grades=[]){
    this.firstName = firstName
    this.lastName = lastName
    this.grades = grades
}

Student.prototype.inputNewGrade = function (newGrade) {this.grades.push(newGrade)}
Student.prototype.computeAvrageGrade = function() {return this.grades.reduce((x,y) => x+y) / this.grades.length}

let s = new Student('a', 'b')

console.log(s)
s.inputNewGrade(50);
s.inputNewGrade(70);
console.log(s);
console.log(s.computeAvrageGrade())