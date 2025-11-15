function wordPattern(pattern:string, str:string){
  for(let i=0;i<pattern.length;i++){
    for(let j=i;j<pattern.length;j++){
      if(pattern[i]===pattern[j])
        console.log(pattern.indexOf(pattern[i],pattern[j]))
      break
    }
  }
 
}
console.log(wordPattern("abba", "dog cat cat dog"));