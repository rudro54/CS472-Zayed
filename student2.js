function Student(studentId, answers = []) {
    this.studentId = studentId
    this.answers = answers

    // this.addAnswer = function (question) {this.answers.push(question)}


}

Student['addAnswer']=function(){console.log('got answer')};


let s= new Student("x7");

Student.addAnswer();




