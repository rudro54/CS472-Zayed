"use strict";
class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }

    getSalary(){
        return this.salary;
    }
    getName(){
        return this.name;
    }

    static compareBySalary(emp1, emp2){
        return emp1.salary-emp2.salary;
    }
}

class Manager extends Employee{
    constructor(name,salary,bonus){
        super(name,salary);
        this.bonus=bonus;
    }

    getSalary(){
        return super.getSalary()+this.bonus;
    }
}

let mgr1= new Manager("Jane Doe", 60000,10000);
console.log(mgr1.getSalary());
console.log(mgr1.getName());