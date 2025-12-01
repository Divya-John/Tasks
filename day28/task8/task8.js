"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = str;
function str(obj) {
    if (Object.keys(obj).length === 0 && Object.values(obj).length === 0) {
        return "Invalid input";
    }
    let result = [];
    for (const [key, value] of Object.entries(obj)) {
        result.push(`${key}=${value}`);
    }
    return result.toString().replaceAll(/[,]/g, "&");
}
//# sourceMappingURL=task8.js.map