
function count(str){
  let count='';
  count=str.split(' ')
  return count.length;
}
console.log(count("Hello world"));
console.log(count("This is a sample sentence"));
console.log(count("Programming is fun!"));