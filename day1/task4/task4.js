const listItems=document.getElementById('list')
const addBtn=document.getElementById('btn')
const nameAdd = document.getElementById("name")


function add(){
  const text = nameAdd.value;
  const newList=document.createElement('li');
  newList.innerHTML=`
    <span>${text}</span>
    <button id="doneBtn">Done</button>
    `;
    listItems.appendChild(newList);
    const doneBtn = newList.querySelector('button');
    doneBtn.addEventListener("click",()=>newList.style.textDecoration="line-through")
}