const input=document.getElementById("nameInput")
const greeting=document.getElementById("greeting")

let timeout;

input.addEventListener("input", ()=>{
  clearTimeout(timeout)

  timeout=setTimeout(()=>{
    const name=input.value.trim();
    greeting.textContent=name?`Hello ${name}`: ''
  },1000)
})