function objects(a:object, b:object) {
  const changed:object={}
  const added:object={}
  const removed:(string|number)[]=[]

  for(let key in a){
    if(!(key in b)){
      removed.push(key)
    }
    else if(a[key]!==b[key]){
      changed[key]=[a[key],b[key]];
    }
  }

  for(let key in b){
    if(!(key in a)){
      added[key]=b[key]
    }
  }
  return {changed,added,removed}
}
console.log(objects({ x: 1, y: 2, z: 3 }, { x: 1, y: 4, w: 5 }));