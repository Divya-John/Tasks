
function sortArr(str){
  
  const sortedArray = str.split("").sort();
  
  const count = [];
  for(let i=0;i<sortedArray.length;i++){

    if (sortedArray[i] in count) {
      count[sortedArray[i]]++;
    }else{
      count[sortedArray[i]] = 1;
    }
  };
  return count
}
console.log(sortArr("hello"));
console.log(sortArr("programming"));