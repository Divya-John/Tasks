function anagram(words) {
  let obj = {};
  if (words == "" || words.length === 0) return "Empty array";
  if (!Array.isArray(words)) return "Not a array";

  for (i = 0; i < words.length; i++) {
    if (typeof words[i] !== "string") return "Invalid input";
  }
  const result = words.filter((w) => w.trim() !== "");

  for (i = 0; i < result.length; i++) {
    let word = result[i].replace(/[ ]/g, "").trim();

    let sorted = word.split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = [];
    }
    obj[sorted].push(word);
  }
  let arr = Object.values(obj);
  let re = arr.sort((a, b) => b.length - a.length);
  return arr;
}

function testCase() {
  const tests = [
    {
      input: ["care", "race", "acre", "dog", "god", "cat"],
      expected: [["care", "race", "acre"], ["dog", "god"], ["cat"]],
    },
    {
      input: ["cares", "race", "acrer", "djog", "god", "cats"],
      expected: [["cares"], ["race"], ["acrer"], ["djog"], ["god"], ["cats"]],
    },
    {
      input: ["bat", "tea", "tan", "nat"],
      expected: [["tan", "nat"], ["bat"], ["tea"]],
    },
    {
      input: ["bat   ", "tea", "tan", "nat"],
      expected: [["tan", "nat"], ["bat"], ["tea"]],
    },
    {
      input: ["bat", "     ", "tan", "nat"],
      expected: [["tan", "nat"], ["bat"]],
    },
    {
      input: ["@", "tan", "nat"],
      expected: [["tan", "nat"], ["@"]],
    },
    {
      input: [],
      expected: "Empty array",
    },
    {
      input: "#",
      expected: "Not a array",
    },
    {
      input: {},
      expected: "Not a array",
    },
    {
      input: 123,
      expected: "Not a array",
    },
    {
      input: [" ", "tea", "tan", "nat"],
      expected: [["tan", "nat"], ["tea"]],
    },
    {
      input: ["", "tea", "tan", "nat"],
      expected: [["tan", "nat"], ["tea"]],
    },
    {
      input: [123, "tea", "tan", "nat"],
      expected: "Invalid input",
    },
    {
      input: ["tea", 123, "nat"],
      expected: "Invalid input",
    },
    {
      input: ["te   a", "tan", "nat"],
      expected: [["tan", "nat"], ["tea"]],
    },
  ];
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    const result = anagram(test.input);
    const passed = result === test.expected;
    console.log(`Test ${i + 1}:`, passed ? "Pass" : `Fail`);
    if (!passed) {
      console.log("Expected:", test.expected);
      console.log("Got:", result);
    }
  }
}
testCase();
