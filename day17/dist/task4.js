"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Once() {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            console.log("Initialized");
        }
    };
}
const initialize = Once();
initialize();
initialize();
//# sourceMappingURL=task4.js.map