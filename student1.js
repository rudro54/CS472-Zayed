function Student(studentId, answers = []) {
    this.studentId = studentId
    this.answers = answers
}

Student.prototype.addAnswer = function (question) {this.answers.push(question)}

let s = new Student("x")
s.addAnswer("prob two")
