const counter = document.getElementById("count");
const increments = document.getElementById("increment");
const decrements = document.getElementById("decrement");
const displayCount = document.getElementById("resetbtn");

let count = 0;
function reset() {
  count = 0;
  counter.textContent = count;
  background();
}
background();
function increment() {
  if (count < 10) {
    count++;
    counter.textContent = count;
    bgred();
    background();
  }
}
function decrement() {
  if (count > -10) {
    count--;
    counter.textContent = count;
    bggreen();
    background();
  }
}
function background() {
  if (count == 0) counter.style.color = "gray";
}
function bgred() {
  if (count > 0) counter.style.color = "Red";
}
function bggreen() {
  if (count < 0) counter.style.color = "green";
}
