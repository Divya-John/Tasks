"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function num(...n) {
    const sum = n.reduce((acc, curr) => acc + curr);
    return sum;
}
console.log(num(1, 2, 3, 4));
console.log(num(1, 2));
//# sourceMappingURL=task12.js.map