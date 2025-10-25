function prefix(arr){
  arr.sort();
  const arr1=arr[0]
  const arr2 = arr[arr.length-1];

  const re=[]

  const str1= []
  str1.push(arr1)
  let re1=str1.toString().split("")

  const str2 = [];
  str2.push(arr2);
  let re2 = str2.toString().split("");

  for(i=0;i<re1.length;i++){
    if(re1[0]!=re2[0]) return "";
    if(re1[i]===re2[i])
    {
      re.push(re1[i])
    }
  }
  return re.toString().split(",").join("")

}
console.log(prefix(["flower", "flow", "flight"]));
console.log(prefix(["dog", "racecar", "car"]));