function anagram(words){
  let obj={}
  for(i=0;i<words.length;i++){
    let word = words[i];

    let sorted = word.split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = [];
    }
    obj[sorted].push(word);
  }

  let arr=Object.values(obj)
  let re=arr.sort((a,b)=>b.length-a.length)
  return re

}
console.log(anagram(["bat", "ate","eat", "tea", "tan", "nat"]));
