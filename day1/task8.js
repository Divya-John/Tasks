function anagram(words){
  let groups={}
  for(i=0;i<words.length;i++){
    let word=words[i];

    let sorted=word.split("").sort().join("")

    if(!groups[sorted]){
      groups[sorted]=[]
    }
    groups[sorted].push(word)

  }
  let result=Object.values(groups)
  return result
}
console.log(anagram(["care", "race", "acre", "dog", "god", "cat"]));