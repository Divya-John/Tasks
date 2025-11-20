const text = document.getElementById("text") as HTMLInputElement;
const count = document.getElementById("count") as HTMLParagraphElement;

text.addEventListener("input", counter);
function counter() {
  const txt = text.value;
  if (txt.length > 20) count.style.color = "red";
  if (txt.length < 20) count.style.color = "black";
  count.textContent = `Count:${txt.length.toString()}`;
}
counter();

