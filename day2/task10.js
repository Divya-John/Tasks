// function commonprefix(str){
//   str.sort()
//   let str1=str[0]
//   let str2=str[str.length-1]

//   let i=0;
//   while(i<str1.length){
//     if(str1[i]===str2[i]){
//       i++
//     }else{
//       break;
//     }
//   }
//   return i===0?"":str1.substring(0,i)
// }
// console.log(commonprefix(["flower", "flow", "flight"]));

import { arrayCheck } from "../utils.js";

function prefix(arr) {
  if (!Array.isArray(arr)) return "Not an array";
 
  arr = arr.filter(
    (str) =>
      typeof str === "string" &&
      str.trim() !== ""
  );
  arr=arr.map((str)=>
    str.replaceAll(/[ ]/g,'')
  )
  if (arr.length === 0) return "Empty array";


  arr = arr.sort();

  const arr1 = arr[0];
  const arr2 = arr[arr.length - 1];

  const re = [];

  const str1 = [];
  str1.push(arr1);
  let re1 = str1.toString().split("");

  const str2 = [];
  str2.push(arr2);
  let re2 = str2.toString().split("");
  
  for (let i = 0; i < re1.length; i++) {
    if (re1[0] != re2[0]) return "";
    if (re1[i] === re2[i]) {
      re.push(re1[i]);
    }
    
  }
  for(let i=0;i<re.length;i++){
    if(re.length===0||re[i]==="") return "Empty array"
  }

  return re.toString().split(",").join("");
}


function testCase() {
  const tests = [
    {
      input: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      input: ["dog", "racecar", "car"],
      expected: "",
    },
    {
      input: ["apple", "app", "application"],
      expected: "app",
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: {},
      expected: "Not an array",
    },
    {
      input: 123,
      expected: "Not an array",
    },
    {
      input: ["", "app", "application"],
      expected: "app",
    },
    {
      input: [112, "app", "application"],
      expected: "app",
    },
    {
      input: ["app", , "application"],
      expected: "app",
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
    {
      input: ["a    pp", , "application"],
      expected: "app",
    },
    {
      input: ["        apple", "app", "application"],
      expected: "app",
    },
    {
      input: ["apple", "app", "application            "],
      expected: "app",
    },
    {
      input: [{}],
      expected: "Empty array",
    },
    {
      input: [{1:"dssd"}],
      expected: "Empty array",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = prefix(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
