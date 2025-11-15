function romanToInteger(roman: { string }) {
  // const letters = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
  const letters = ["I", "V", "X", "L", "C", "D", "M"];
  const numbers = [1, 5, 10, 50, 100, 500, 1000];

  // let newinput = roman.split("").reverse();
  // console.log(newinput);
  let index = [];
  for (let i = 0; i < roman.length; i++) {
    index.push(letters.indexOf(roman[i]));
  }
  let result=[]
  for (let i = 0; i < numbers.length; i++) {
    for(let j=0;j<index.length;j++){
      if (index[j] === i) (result.push(numbers[i]));
    } 
  }
  console.log(result.reverse())

  for (let i=0;i<result.length;i++){
   console.log(result[i]-result[i+1])
  }
}
romanToInteger("IV");
