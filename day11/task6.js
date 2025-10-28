// let input = [10, 20, 15, 30, 22, 400];

// let re = [];

// const findmin=Math.min(...input)
// console.log(findmin)
// const first = input.slice(0, input.indexOf(findmin));
// const second= input.slice(input.indexOf(findmin)+1,-1);

// for(i=0;i<first.length-1;i++){
//   for(j=i;j<second.length-1;j++){
//     if(first[i]>second[j]){
//       re.push(first[i])
//     }
//   }
// }
// console.log(re)



function findLongest(arr) {
  if (arr.length === 0) {
    return [];
  }

  const dp = new Array(arr.length).fill(1);
  const prev = new Array(arr.length).fill(-1);

  let maxLength = 1;
  let endIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  const longestChain = [];
  let currentIndex = endIndex;
  while (currentIndex !== -1) {
    longestChain.unshift(arr[currentIndex]);
    currentIndex = prev[currentIndex];
  }

  return longestChain;
}
console.log(findLongest([10, 20, 15, 30, 22, 400]));
console.log(findLongest([6, 9, 2, 0, 5, 7, 8, 2, 8]));