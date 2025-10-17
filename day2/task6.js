
function divisible(arr){
  let result=[]

  function threeDivisible(){
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  threeDivisible();
  const sumofthree = result.reduce((sum, results) => {
    return sum + results;
  });
  return sumofthree;
}
console.log(divisible([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(divisible([10, 20, 30, 40, 50]));
console.log(divisible([15, 25, 35, 45, 55]));