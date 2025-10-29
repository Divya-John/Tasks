export function objectCheck(result, expected) {
  let passed;
  if (typeof result !== "string") {
    if (!Array.isArray(result) || !Array.isArray(expected)) {
      passed = false;
    } else if (result.length !== expected.length) {
      passed = false;
    } else {
      for (let j = 0; j < result.length; j++) {
        const resultKey = Object.keys(result[j]);
        const expectKey = Object.keys(expected[j]);
        if (resultKey.length !== expectKey.length) {
          passed = false;
          break;
        }
        for (let k = 0; k < resultKey.length; k++) {
          if (
            !result[j].hasOwnProperty(resultKey[k]) ||
            result[resultKey[j]] !== expected[resultKey[k]]
          ) {
            passed = false;
            break;
          } else {
            passed = true;
          }
        }
        if (passed === false) break;
      }
    }
  } else {
    if (result === expected) {
      passed = true;
    } else {
      passed = false;
    }
  }
  return passed
}
objectCheck();


