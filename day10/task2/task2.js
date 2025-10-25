const container = document.getElementById("container");
const progress = document.getElementById("progressbar");
container.addEventListener("scroll",()=>{
  scrollTop = container.scrollTop;
  scrollHeight=container.scrollHeight-container.clientHeight
  const result=(scrollTop/scrollHeight)*100
  progress.style.width = result + "%";
})