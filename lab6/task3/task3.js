"use strict"

function Animal(name, speed=0) {
    this.name = name
    this.speed = speed
}

Animal.prototype.run = function (speed=1) {this.speed+=speed}
Animal.compareBySpeed = function (a1,a2) {return a1.speed - a2.speed}

function Rabbit(name, speed=0) {
    Animal.call(this, name, speed)
}

Rabbit.prototype.hide = function() {return this.name + " hides"}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)

let a = new Animal("x", 5)
console.log(a)
a.run()
console.log(a)

let r = new Rabbit("r")
console.log(r)
r.run(2)
console.log(r)
console.log(r.hide())

let a2 = new Animal("a2", 3)
let r2 = new Rabbit("r2",1)

let animals = [a, a2, r, r2]
let rabbits = [r, r2]

animals.sort((X,y) => Animal.compareBySpeed(X,y)).forEach(x => console.log(x.name));

// console.log(Object.getPrototypeOf(r))
// console.log(Object.getPrototypeOf(a))