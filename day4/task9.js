function Anagram(str1,str2){
  const result1 = str1.split("").sort().toString().replace(/[,]/g, "");
  const result2 = str2.split("").sort().toString().replace(/[,]/g, "");

  if (result1 == result2) {
    return true;
  } else {
    return false;
  }
}
console.log(Anagram("listen", "silent"));
console.log(Anagram("restful", "fluster"));
console.log(Anagram("hello", "world"));