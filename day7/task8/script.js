const like=document.getElementById("like")
const unlike = document.getElementById("unlike");
const button=document.getElementById("btn")


button.addEventListener("click", display);
function display() {
  like.style.display === "none";
  if (like.style.display === "none") {
    like.style.display = "block";
    unlike.style.display = "none";
  }else {
    like.style.display = "none";
    unlike.style.display = "block";
  }
}