var text = document.getElementById("text");
var count = document.getElementById("count");
text.addEventListener("input", counter);
function counter() {
    var txt = text.value;
    if (txt.length > 20)
        count.style.color = "red";
    if (txt.length < 20)
        count.style.color = "black";
    // count.textContent = txt.length.toString();
    count.textContent = "Count:".concat(txt.length.toString());
}
counter();
