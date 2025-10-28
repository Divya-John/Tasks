// const list = document.getElementById("list");
// const input = document.getElementById("name");
// const addBtn = document.getElementById("btn");
// const toggleBtn = document.getElementById("toggleBtn");

// let items = JSON.parse(localStorage.getItem("todoList")) || [];
// let showPendingOnly = false;

// function renderList() {
//   list.innerHTML = "";

//   items.forEach((item, index) => {
//     if (showPendingOnly && item.done) return;

//     const li = document.createElement("li");
//     li.innerHTML = `
//       <span style="text-decoration:${
//         item.done ? "line-through" : "none"
//       }; ">
//         ${item.text}
//       </span>
//     `;

//     li.querySelector("span").addEventListener("click", () => toggleDone(index));

//     list.appendChild(li);
//   });

//   localStorage.setItem("todoList", JSON.stringify(items));
// }

// function add() {
//   const text = input.value.trim();
//   if (!text) return;

//   items.push({ text, done: false });
//   input.value = "";
//   renderList();
// }

// function toggleDone(index) {
//   items[index].done = !items[index].done;
//   renderList();
// }

// toggleBtn.addEventListener("click", () => {
//   showPendingOnly = !showPendingOnly;
//   toggleBtn.textContent = showPendingOnly ? "Show All" : "Show Only Pending";
//   renderList();
// });

// addBtn.addEventListener("click", add);
// renderList();





const taskInput=document.getElementById("name")
const addBtn=document.getElementById("btn")
const taskList = document.getElementById("list");
const toggleBtn = document.getElementById("toggleBtn");

let showPendingOnly=false;

addBtn.addEventListener("click",addTask)
toggleBtn.addEventListener("click", togglePending);

function addTask(){
  const text=taskInput.value.trim();

  if(text===""){
    alert("Please enter a task!")
    return;
  }

  const li=document.createElement("li")
  li.textContent=text;
  li.dataset.done="false";

  li.addEventListener("click",()=>{
    const done=li.dataset.done==="true";
    li.dataset.done=done?"false":"true"
    li.style.textDecoration=done?"none":"line-through"
    applyFilter()
  })

  taskList.appendChild(li)

  taskInput.value="";
  applyFilter()
}

function togglePending(){
  showPendingOnly=!showPendingOnly;
  toggleBtn.textContent=showPendingOnly?"Show All":"Show Only Pending";
  applyFilter()
}

function applyFilter(){
  const listItem=taskList.querySelectorAll("li")
  listItem.forEach((li)=>{
    const isDone=li.dataset.done==="true";
    li.style.display=showPendingOnly&&isDone?"none":"list-item"
  })
}