"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterExpired(items) {
    const now = Date.now();
    // let result = [];
    // for (let i = 0; i < items.length; i++) {
    //   if (items[i].expiresAt > now) {
    //     result.push(items[i]);
    //   }
    // }
    // return result;
    return items.filter(function (item) {
        return item.expiresAt > now;
    });
}
const data = [
    { value: "data1", expiresAt: 1784385871929 },
    { value: "expired", expiresAt: 1600000000000 },
];
console.log(filterExpired(data));
//# sourceMappingURL=task2.js.map