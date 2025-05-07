"use strict"

const isPrime = (n) => {
    return new Promise((resolve) => {
        let result = true
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {if (n % i === 0) result =false}
        resolve(result)
    })
}

isPrime(2).then(r => console.log(r))
isPrime(8).then(r => console.log(r))
isPrime(13).then(r => console.log(r))
isPrime(9).then(r => console.log(r))