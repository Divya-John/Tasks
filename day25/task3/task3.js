"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text = document.getElementById("text");
const count = document.getElementById("count");
text.addEventListener("input", counter);
function counter() {
    const txt = text.value;
    if (txt.length > 20)
        count.style.color = "red";
    if (txt.length < 20)
        count.style.color = "black";
    count.textContent = `Count:${txt.length.toString()}`;
}
counter();
//# sourceMappingURL=task3.js.map