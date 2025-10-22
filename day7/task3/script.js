const box = document.getElementById("container");
box.style = " width:100px; height:100px; border:5px solid;";

box.addEventListener("dblclick",changeborder)

function rnb(){
  let r = Math.floor(Math.random() * 225);
  let g = Math.floor(Math.random() * 225);
  let b = Math.floor(Math.random() * 225);
  return `rgb(${r},${g},${b})`;
}
rnb()


function changeborder() {
  const result = rnb();
  box.style.borderColor= result;
}
changeborder();