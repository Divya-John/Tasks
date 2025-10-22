const list = document.getElementById("section");
const btn = document.getElementById("addbtn");
const textitem = document.getElementById("text");

btn.addEventListener('click',add)

function add(){
  const listItems = textitem.value;
  const addli = document.createElement("li");
  addli.innerHTML = listItems;
  list.appendChild(addli);
  textitem.value=""
}
