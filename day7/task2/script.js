const text=document.getElementById("text");
const button=document.getElementById("btn")
const result = document.getElementById("result");

button.addEventListener("click",display)
function display(){
  if (result.style.display === "none") {
    result.textContent = text.value;
    result.style.display = "block";
  } else {
     result.style.display = "none";
  }
}