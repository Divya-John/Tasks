function findPath(obj,targetKey){
  let path=[]

  function helper(currentObj, currentPath){
    for(let key in currentObj){
      let newPath=[...currentPath,key]

      if(key===targetKey){
        path=newPath;
        return true;
      }

      if(typeof currentObj[key]==="object"&& currentObj[key]!==null){
        if(helper(currentObj[key],newPath)){
          return true;
        }
      }
    }

    return false;
  }
  helper(obj,[])
  return path
}
console.log(findPath({ a: { b: { c: 1 } } }, "c"));