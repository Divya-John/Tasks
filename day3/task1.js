function sum(arr){
  let sum = 0;
  let arr1=[]
  for(i=0;i<arr.length;i++){
    arr1.push(Number(arr[i].toString().replace(/[,]/g, "")))
  }
  for(i=0;i<arr1.length;i++){
    sum = sum+arr1[i];
  }
  return sum;
}
console.log(sum([[1, 2, 3],[0, 7]]))
