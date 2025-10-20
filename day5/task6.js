// 1
// let n1=3.49;
// console.log(Math.round(n1))
// console.log(Math.floor(n1))
// console.log(Math.ceil(n1));
// let n2=3.5;
// console.log(Math.round(n2));
// console.log(Math.floor(n2));
// console.log(Math.ceil(n2));


// 2
// function safeAdd(a,b){
//   return a+b;
// }
// console.log(safeAdd(0.1,0.2))


// 4
// let min=50;
// let max=100;
// let result=Math.floor(Math.random()*(max-min)+50)
// console.log(result)

// 5
function sumOfDigits(n){
  let num = n.toString().split("");
  let sum=0;
  let number=[];
  for(i=0;i<num.length;i++){
    number.push(Number(num[i])) 
  }
  for(i=0;i<number.length;i++){
    sum=sum+number[i]
  }
  return sum; 
}
console.log(sumOfDigits(123))