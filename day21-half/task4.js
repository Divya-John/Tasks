function flatten(obj){

  let Key=Object.keys(obj)
  let Value = Object.values(obj);
  console.log(Key,Value)

  function flat(){
    flatten(obj)
  }

}
console.log(flatten({ a: { b: { c: 1 } }, d: 2 }));