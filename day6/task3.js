function missNumber(arr){
  let sorted=arr.sort()
  let min=sorted[0]
  let max=sorted[sorted.length-1]
  let sum=0
  const sumArr=arr.reduce((acc,curr)=>acc+curr)
  for(let i=min;i<=max;i++){
    sum+=i;
  }
  let missNo=sum-sumArr
  if(missNo===0){
    return min-1
  }
  return missNo
}
console.log(missNumber([1, 2, 3, 5, 6]));