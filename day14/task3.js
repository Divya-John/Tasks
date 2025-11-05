function word(str) {
  const newStr = str.split("");
  console.log(newStr);
  let result = [];
  let index=[]
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (i = 0; i < newStr.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (newStr[i] === vowels[j]){
        result.push((newStr[i]))
        index.push(newStr[i]);
      }
    }
  }
  console.log(result.reverse());
  console.log(index);

  // for(i=0;i<result.length;i++){
  //   let temp=result[]
  // }
}
// console.log(word("IceCreAm"));
word("IceCreAm");

