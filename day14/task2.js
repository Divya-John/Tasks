function arrayOfstr(arr,maxwidth){
  arr=arr.toString().replace(/[,]/g," ")
  console.log(arr)
 
}
console.log(
  arrayOfstr(
    ["This", "is", "an", "example", "of", "text", "justification."],
    16
  )
);