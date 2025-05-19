function sum(...args: number[]): number {
    return args.reduce((i,j) => i + j, 0)
} 

console.log(sum(1,2,3,5,4,6,78,9))