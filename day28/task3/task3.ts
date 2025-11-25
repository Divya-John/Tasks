export function armstorng(n: number) {
  if(n<0) return "Not a armstrong"
  let numsplit = n.toString().split("");
  let result = [];
  for (let i = 0; i < numsplit.length; i++) {
    if(numsplit[i]){
      result.push(numsplit[i]**numsplit.length)
    }
  }
  const sum:number=result.reduce((acc,curr)=>acc+curr)
  let armstorng=(n===sum)?true:false;
  return armstorng;
}