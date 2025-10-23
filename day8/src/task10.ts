function frequency(str:string){
  const newStr=str.split("").join("").toString().toLowerCase()
  let count:any={}
  for(let i of newStr){
    count[i]=(count[i]||0)+1
  }
  return count;
}
console.log(frequency("hello"));