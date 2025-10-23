function sum(num1:number[][]):number{

  let sum:number=0;
  let arr:number[]=[];
  num1.forEach(e=>{
    const num = Number(e.toString().replace(/[,]/g, ""));
    arr.push(num);
  })
  sum = arr.reduce((a,b)=>a+b,0)
  return sum;
}
console.log(sum([[1,2,3],[0,7]]))
