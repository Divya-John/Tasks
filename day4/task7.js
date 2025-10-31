import { arrayCheck } from "../utils.js";

function rgbHex(rgb){
  if (!Array.isArray(rgb)) return "Not an array";
  rgb = rgb.filter((color) => typeof color === "number");
  if (rgb.some((color) => color < 0 || color > 255))return "Invalid input"; 
  if (rgb.length === 0) return "Empty array";
  let result='#'
  for(let i=0;i<rgb.length;i++){
    let hex = rgb[i].toString(16);
    if (hex.length === 1) {
      hex = "0" + hex;
    }
    result += hex;
  }
  return result.toUpperCase()
}

function testCase() {
  const tests = [
    {
      input: [255, 165, 0],
      expected: "#FFA500",
    },
    {
      input: [0, 0, 0],
      expected: "#000000",
    },
    {
      input: [255, 255, 255],
      expected: "#FFFFFF",
    },
    {
      input: [255, , 255],
      expected: "#FFFF",
    },
    {
      input: [255, 255],
      expected: "#FFFF",
    },
    {
      input: [1, 2, 3],
      expected: "#010203",
    },
    {
      input: [, , ],
      expected: "Empty array",
    },
    {
      input: [255, -25, 255],
      expected: "Invalid input",
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
      input: [],
      expected: "Empty array",
    },
    {
      input: [112, "application", 255],
      expected: "#70FF",
    },
    {
      input: ["", "", ""],
      expected: "Empty array",
    },
    {
      input: [{}],
      expected: "Empty array",
    },
    {
      input: [{ 1: "dssd" }],
      expected: "Empty array",
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = rgbHex(test.input);
    const passed = arrayCheck(result, test.expected);

    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
