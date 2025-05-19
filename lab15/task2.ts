const a: number[] = [1,2,3,4,5,6]

function findSecondLargest(a: number[]): number {
    let largest:number = a.reduce((i,j) => i < j ? j : i, 0)
    let secondLargest:number = a.filter(i => i !== largest).reduce((i,j) => i < j ? j : i, 0)
    return secondLargest
}

console.log(findSecondLargest(a))