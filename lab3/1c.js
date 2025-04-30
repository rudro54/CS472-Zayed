"use strict";

function printFibo(n,a,b)
{
    let result =[];
    if(n>=1) result.push(a);
    if(n>=2) result.push(b);

    for(let i=2;i<n; i++){
        let next = result[i-1]+result[i-2];
        result.push(next);
    }
    console.log(result.join(", "));

}

printFibo(10,0,1);
