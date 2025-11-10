"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num1) {
    let sum = 0;
    let arr = [];
    num1.forEach(e => {
        const num = Number(e.toString().replace(/[,]/g, ""));
        arr.push(num);
    });
    sum = arr.reduce((a, b) => a + b, 0);
    return sum;
}
console.log(sum([[1, 2, 3], [0, 7]]));
//# sourceMappingURL=task11.js.map