function combineObject(obj1,obj2){
  const result=Object.assign(obj1,obj2)
  return result;
}
console.log(combineObject({ a: 1, b: 2 }, { b: 3, c: 4 }));