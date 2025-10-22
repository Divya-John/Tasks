
const contents = document.getElementById("contents");

contents.addEventListener("keypress", keys);

function keys(e){
  const keyName = e.key;
  const tbl=document.createElement("table")
  const tblBody = document.createElement("tbody");
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.innerHTML=keyName
  row.appendChild(cell);
  tblBody.appendChild(row);
  tbl.appendChild(tblBody);
  tbl.setAttribute("border", "1");
  document.body.appendChild(tbl)
}
keys()
