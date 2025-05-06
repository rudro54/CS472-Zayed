"use strict"

function Student(studentId, answers = []) {
    this.studentId = studentId
    this.answers = answers
}

Student.prototype.addAnswer = function (question) {this.answers.push(question)}

function Question(qid, answer) {
    this.qid = qid
    this.answer = answer
}

Question.prototype.checkAnswer = function (answer) {return this.answer === answer}

function Quiz(questions=[], students=[]) {
    this.questions = new Map(questions.map(a => [a.qid, a.answer]))
    this.students = students
}

Quiz.prototype.scoreStudentBySid = function (sid) {
    let self = this
    return this.students.find(x => x.studentId == sid).answers.map(a => {
        return a.checkAnswer(self.questions.get(a.qid)) ? 1 : 0 
    }).reduce((x,y) => x + y, 0)
}

Quiz.prototype.getAverageScore = function () {
    let self = this
    return this.students.map(s => this.scoreStudentBySid(s.studentId)).reduce((x,y) => x+y) / this.students.length
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new
Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5