const list = document.getElementById("section");

window.addEventListener("keypress",e=>{
  if(e.key==="A"&&e.shiftKey===true){
    list.style.display="block";
  }
})