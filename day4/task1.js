function flatten(arr){
    const newArr=arr.flat(3)
    return newArr;
}
console.log(flatten([1, [2, [3, [4]], 5]]));