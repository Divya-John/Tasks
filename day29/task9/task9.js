function objects(a, b) {
  let keya = Object.keys(a);
  let valuesa = Object.values(a);

  let keyb = Object.keys(b);
  let valuesb = Object.values(b);

  console.log(keya);
  console.log(keyb);
let result=[]
  for(let i=0;i<keya.length;i++){
    for(let j=0;j<keyb.length;j++){
      if(keya[i]===keyb[j]){
        result.push(keya[i])
      }
    }
  }
  console.log(result)
}
console.log(objects({ x: 1, y: 2, z: 3 }, { x: 1, y: 4, w: 5 }));
