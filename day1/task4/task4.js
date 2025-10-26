const list = document.getElementById("list");
const nameInput = document.getElementById("name");
const addBtn = document.getElementById("btn");
const toggleBtn = document.getElementById("toggleBtn");

let showPendingOnly = false;

let items = JSON.parse(localStorage.getItem("todoList")) || [];

function renderList() {
  list.innerHTML = "";
  items.forEach((item, index) => {
    if (showPendingOnly && item.done) return; 

    const li = document.createElement("li");
    li.className = item.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = item.text;

    li.addEventListener("click", () => toggleDone(index));

    li.appendChild(span);
    list.appendChild(li);
  });
}

function add() {
  const text = nameInput.value.trim();
  if (!text) return;

  items.push({ text, done: false });
  nameInput.value = "";

  saveAndRender();
}

function toggleDone(index) {
  items[index].done = !items[index].done;
  saveAndRender();
}

toggleBtn.addEventListener("click", () => {
  showPendingOnly = !showPendingOnly;
  toggleBtn.textContent = showPendingOnly ? "Show All" : "Show Only Pending";
  renderList();
});

function saveAndRender() {
  localStorage.setItem("todoList", JSON.stringify(items));
  renderList();
}

addBtn.addEventListener("click", add);

renderList();
