type Person = {name:string, age:number, isStudent:boolean}

function printString(x: Person): string {

    return `${x.name} ${x.age} ${x.isStudent}`
}


console.log(printString({name: "a", age: 10, isStudent: true} as Person))