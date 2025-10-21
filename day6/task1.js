function rearrage(arr){
  let even=[]
  let odd=[]
  for(i=0;i<arr.length;i++){
    (arr[i]%2===0)?even.push(arr[i]):odd.push(arr[i]); 
  }
  let newArr=[...even,...odd]
  return newArr;
}
console.log(rearrage([3, 2, 4, 1, 5, 8]));