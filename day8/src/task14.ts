function anagram(words: string[]): string[][]{
  let wordsGroup:{[key:string]:string[]}={};

  for (const word of words) {
    let sorted = word.split("").sort().join("");

    if (!wordsGroup[sorted]){
      wordsGroup[sorted] = [];
    }
    wordsGroup[sorted].push(word);
  }
  let result: string[][] = Object.values(wordsGroup);
  return result;
}
console.log(anagram(["care", "race", "acre", "dog", "god", "cat"]))