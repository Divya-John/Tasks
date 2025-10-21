// 1
// let str=' Hello, World! '
// const newStr=str.replaceAll(/[,' '!]/g,'')
// console.log(newStr.toLowerCase())


// 2
// function extractUsername(email){
//   for(i=0;i<email.length;i++){
//     if(email[i]==="@"){
//       return email.slice(0,i)
//     }
//   }
// }
// console.log(extractUsername("userName@gmail.com"));


// 3
// function capitalize(sentence){
//   let str = sentence.split(" ");
//   let join=[]
//   for(i=0;i<str.length;i++){
//     const first =str[i].charAt(0).toUpperCase()
//     const second=str[i].slice(1)
//     join.push(first+second)
//   }
//   return join.toString().split(",").join(" ");
// }
// console.log(capitalize("hello world"));

// 4
// function reverseWords(sentence){
//   let reversed=sentence.split(" ");
//   let result=""
//   for(i=0;i<sentence.length;i++){
//    result = reversed.reverse();
//   }
//   return result.toString().split(",").join(" ")
// }
// console.log(reverseWords("Hello world"));


// // 5
// function countVowels(str){
//   let count = 0;
//   for(i=0;i<str.length;i++){
//     let vowels='a,e,i,o,u'
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels('Hello world'));