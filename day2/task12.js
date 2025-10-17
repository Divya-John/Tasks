
function max(arr){
  arr.sort((a, b) => b - a);

  const maxThree = arr.slice(0, 3);

  const product = maxThree.reduce((acc, curr) => acc * curr);
  return product;
}
console.log(max([1, 2, 3, 4]))
console.log(max([-4, -3, -2, -1, 0]));
console.log(max([-1, -2, -3, -4, -5]));