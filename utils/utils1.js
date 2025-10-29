export function objectCheck(result, expected) {
let passed=true;
  if(typeof result!=='string'){
    const resultKey=Object.keys(result);
    const expectKey = Object.keys(expected);
    if(resultKey.length!==expectKey.length){
      passed=false;
      return;
    }
    for(let i=0;i<resultKey.length;i++){
      if (
        !result.hasOwnProperty(resultKey[i]) ||
        result[resultKey[i]] !== expected[resultKey[i]]
      ) {
        passed = false;
        break;
      } else {
        passed = true;
      }
    }
  }
  else{
    if(result===expected){
      passed=true;
    }
    else{
      passed=false;
    }
  }
  return passed
}

objectCheck()