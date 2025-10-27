let input = [10, 20, 15, 30, 22, 400];

let re = [];

const findmin=Math.min(...input)
console.log(findmin)
const first = input.slice(0, input.indexOf(findmin));
const second= input.slice(input.indexOf(findmin)+1,-1);

for(i=0;i<first.length-1;i++){
  for(j=i;j<second.length-1;j++){
    if(first[i]>second[j]){
      re.push(first[i])
    }
  }
}
console.log(re)

// for(i=0;i<first.length;i++){
//   f1.push(first);
// }
// console.log(f1)


// for(i=min;i<input.length;i++){
//   console.log(input[i])
//   if(input[i]<input[i+1]){
//     re.push(input[i+1])
//   }
// }
// console.log(re)