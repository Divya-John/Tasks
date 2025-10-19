
function missNo(arr){
  arr.sort((a,b)=>a-b)
  const min = arr[0];
  const max = arr[arr.length - 1];
  let result = arr.reduce((acc, curr) => acc + curr);
  let sum=0;
  for(let i=min;i<=max;i++){
    sum+=i
  }
  let missNo = sum - result;
  if (missNo === 0) {
    return min - 1;
  }
  return missNo;
}

console.log(missNo([1, 2, 3, 5, 6]))
console.log(missNo([10, 11, 13, 14, 15]));
console.log(missNo([2, 3, 4, 5, 6]));