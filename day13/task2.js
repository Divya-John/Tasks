// function compose(funcs, x){
//   for(let i=funcs.length-1;i>=0;i--) x=funcs[i](x)
//     return x
// }
// console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4));


function compose(functions,value){
  if(functions.length===0){
    return value;
  }
  let result=value;

  for(let i=functions.length-1;i>=0;i--){
    let currentFunc=functions[i]
    result=currentFunc(result)
  }
  return result
}
console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4));
