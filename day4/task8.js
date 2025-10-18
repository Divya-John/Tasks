
function sumOfthree(arr){
  const newArr = arr.sort((a, b) => b - a);
  let result = newArr.slice(0, 3);
  const sum = result.reduce((acc, curr) => acc * curr);
  return sum;
}
console.log(sumOfthree([1,2,3,4]))