
function anagram(str1:string,str2:string){
  const re1=str1.split("").sort();
  const re2=str2.split("").sort();
  if (re1.join("") === re2.join("")) {
    return true;
  } else {
    return false;
  }
}
console.log(anagram("listen", "silent"));
console.log(anagram("restful", "fluster"));
console.log(anagram("hello", "world"));