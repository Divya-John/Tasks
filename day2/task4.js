function anagram(str1,str2){
  let isAnagram = true;
  
  const result1 = str1.split("").sort().join('') 
  console.log(result1)
  const result2 = str2.split("").sort().join('');
  if (
    str1.length === str2.length && result1===result2) {
    return isAnagram;
  }
  else{
    return !isAnagram
  }

}
console.log(anagram(["listen", "silent"]));
console.log(anagram(["restful", "fluster"]));
console.log(anagram(["hello", "world"]));
