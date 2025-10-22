const box = document.getElementById("container");
box.style = " width:200px; height:200px; border:5px solid;";

function rnb() {
  let r = Math.floor(Math.random() * 225);
  let g = Math.floor(Math.random() * 225);
  let b = Math.floor(Math.random() * 225);
  return `rgb(${r},${g},${b})`;
}
rnb();

function changeborder() {
  const result = rnb();
  box.style.borderColor = result;
  box.removeEventListener('dblclick',changeborder)
}
changeborder();
box.addEventListener("dblclick", changeborder);