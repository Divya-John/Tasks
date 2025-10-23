
function wordCount(word:string):number{
  let str = word.split(" ")
  return str.length;
}
console.log(wordCount("Hello world"));
console.log(wordCount("This is a sample sentence."));
console.log(wordCount("Programming is fun!"));