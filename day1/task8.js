function anagram(words) {
  let obj = {};
  for (i = 0; i < words.length; i++) {
    let word = words[i];

    let sorted = word.split("").sort().join("");
    if (!obj[sorted]) {
      obj[sorted] = [];
    }
    obj[sorted].push(word);
  }

  let arr = Object.values(obj);
  return re;
}
console.log(anagram(["bat", "ate", "eat", "tea", "tan", "nat"]));


function testCase() {
  const tests = [
    {
    }
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
