function frequency(str){
  console.log(str);
  let count={};
  const newStr = str.replaceAll(/[,!]/g, "").toLowerCase().split(" ");
  for(i of newStr){
    count[i]=(count[i]||0)+1
  }
  return count
}
console.log(frequency("Hello hello world, world!"));