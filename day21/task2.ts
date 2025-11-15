function groupAnagrams(words:string[]) {
  let result = {};
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let sorted = word.split("").sort().join("");
    if (!result[sorted]) {
      result[sorted] = [];
    }
    result[sorted].push(word)
  }
  return Object.values(result)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
