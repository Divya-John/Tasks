"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatbit(n) {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    let index = 0;
    while (n >= 1024 && index < units.length - 1) {
        n = n / 1024;
        index++;
    }
    return n.toFixed(2) + " " + units[index];
}
console.log(formatbit(1500));
//# sourceMappingURL=task3.js.map