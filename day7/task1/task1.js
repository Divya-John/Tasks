const box=document.getElementById("container")

box.style = " width:100px; height:100px; border:1px solid black;";

box.addEventListener("mouseover",mover);
box.addEventListener("mouseout", mout);


function rnb() {
  let r = Math.floor(Math.random() * 225);
  let g = Math.floor(Math.random() * 225);
  let b = Math.floor(Math.random() * 225);
  return `rgb(${r},${g},${b})`;
}
rnb();

function mover(){
  const result=rnb()
  box.style.backgroundColor = result;
}
function mout() {
  box.style.backgroundColor = "";
}