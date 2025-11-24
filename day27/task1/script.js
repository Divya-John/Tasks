const cross=document.getElementById("cross")
const notify=document.getElementById("notification")
const notifi = document.getElementById("notifi");
const container = document.getElementById("container");
const getnoti = document.getElementById("getnoti");

function close() {
  notify.style.display = "none";
}

cross.addEventListener("click",close);
setTimeout(close,5000)

getnoti.addEventListener("click", ()=>{
  container.style.display="block"
})