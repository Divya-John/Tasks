function objectEquality(obj1,obj2){
  const re1 = [];
  for(const [key,value] of Object.entries(obj1)){
    re1.push(`${key}${value}`)
  }
  const re2=[]
  for (const [key, value] of Object.entries(obj2)) {
    re2.push(`${key}${value}`);
  }
  re1.sort();
  re2.sort();
  for(i=0;i<re1.length-1;i++){
    if(re1[i]==re2[i]){
      return "equal";
    }
    else return "not eqaul"
  }
}
console.log(objectEquality({ a: 1, b: 2 }, { a: 1 , b: 2}));