"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = camelCase;
function camelCase(str) {
    if (str.length === 0 || str.trim() === "")
        return "Empty";
    return str.replaceAll(/_([a-z])/g, upper);
    function upper(match, str) {
        return str.toUpperCase();
    }
}
