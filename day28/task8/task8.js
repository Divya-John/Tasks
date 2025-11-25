"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = str;
function str(obj) {
    if (Object.keys(obj).length === 0 && Object.values(obj).length === 0) {
        return "Invalid input";
    }
    var result = [];
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        result.push("".concat(key, "=").concat(value));
    }
    return result.toString().replaceAll(/[,]/g, "&");
}
