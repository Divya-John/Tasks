const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

const dropdown = document.getElementById("dropdown");
const dropdown1 = document.getElementById("dropdown1");
const dropdown2 = document.getElementById("dropdown2");
const dropdown3 = document.getElementById("dropdown3");

dropdown.style.display = "none";
dropdown1.style.display = "none";
dropdown2.style.display = "none";
dropdown3.style.display = "none";

item1.addEventListener("click", displays);
function displays() {
  dropdown.style.display = "block";
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";
  dropdown3.style.display = "none";
}
item2.addEventListener("click", displays1);
function displays1() {
  dropdown.style.display = "none";
  dropdown1.style.display = "block";
  dropdown2.style.display = "none";
  dropdown3.style.display = "none";
}
item3.addEventListener("click", displays2);
dropdown2.style.display === "none";
function displays2() {
   dropdown.style.display = "none";
   dropdown1.style.display = "none";
   dropdown2.style.display = "block";
   dropdown3.style.display = "none";
}
item4.addEventListener("click", displays3);
dropdown3.style.display === "none";
function displays3() {
  dropdown.style.display = "none";
  dropdown1.style.display = "none";
  dropdown2.style.display = "none";
  dropdown3.style.display = "block";
}
