function frequencySort(arr:number){
  let sort=arr.sort()
  console.log(sort)
  let result=[]
  let count={}
  for(let i of arr){
      count[i] = (count[i]||0)+1;
  }
  console.log(count)
}
console.log(frequencySort([4, 5, 6, 5, 4, 3]));