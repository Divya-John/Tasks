export function frequent(arr:number[]){
  if(arr.length===0) return []
  let count:object={}
  for(let i of arr){
    count[i]=(count[i]||0)+1
  }
  let value=Object.values(count)
  let key=Object.keys(count)

 let result=value.indexOf(Math.max(...value))
 return Number(key[result])
}