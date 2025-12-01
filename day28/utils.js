"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayCheck = arrayCheck;
function arrayCheck(result, expected) {
    let passed;
    if (Array.isArray(result)) {
        if (result.length !== expected.length) {
            passed = false;
        }
        else {
            passed = true;
            for (let i = 0; i < result.length; i++) {
                if (result[i] !== expected[i]) {
                    passed = false;
                    break;
                }
            }
        }
    }
    else {
        if (result === expected) {
            passed = true;
        }
        else {
            passed = false;
        }
    }
    return passed;
}
arrayCheck();
//# sourceMappingURL=utils.js.map