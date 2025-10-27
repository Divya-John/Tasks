const listItems = document.getElementById("list");
const addBtn = document.getElementById("btn");
const nameAdd = document.getElementById("name");
const toggleBtn = document.getElementById("toggleBtn");

let items=JSON.parse(localStorage.getItem("todoList"))||[];

function renderList(){
  listItems.innerHTML="";
  items.forEach((item,index)=>{
    if(showPenfingOnly&&item.done) return;
    const newList = document.createElement("li");
    newList.innerHTML = `
      <span style="text-decoration:${item.done?"line-through":"none"}">${text.text}</span>
      <button id="doneBtn">{item.done?"Undo":"Done"}</button>
    `;
      listItems.appendChild(newList);
      const doneBtn = newList.querySelector("button");
       doneBtn.addEventListener("click",() => (toggleBtn(index)));
  })
}

function add() {
  const text = nameAdd.value;
  const newList = document.createElement("li");
  newList.innerHTML = `
    <span>${text}</span>
    <button id="doneBtn">Done</button>
    `;
  listItems.appendChild(newList);
  const doneBtn = newList.querySelector("button");
 
}
