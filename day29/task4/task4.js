"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parser(str, obj) {
    str = str.replaceAll(/[{{}}]/g, "");
    let newStr = str.split(" ");
    let key = Object.keys(obj);
    let value = Object.values(obj);
    for (let k = 0; k < newStr.length; k++) {
        for (let i = 0; i < key.length; i++) {
            for (let j = 0; j < value.length; j++) {
                if (newStr[k].includes(key[i]) && i == j) {
                    ((newStr[k] = value[j]));
                }
            }
        }
    }
    return (newStr.toString().replaceAll(/[,]/g, " "));
}
console.log(parser("Hello {{name}}, you have {{count}} new messages.", {
    name: "John",
    count: 3,
}));
//# sourceMappingURL=task4.js.map