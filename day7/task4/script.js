const contents = document.getElementById("contents");

const tbl = document.createElement("table");
tbl.setAttribute("border", "1");
tbl.style.marginTop = "20px";
tbl.style.borderCollapse = "collapse";
tbl.style.width = "200px";

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headerCell = document.createElement("th");
headerCell.textContent = "Keys";
headerRow.appendChild(headerCell);
thead.appendChild(headerRow);

tbl.appendChild(thead);

const tblBody = document.createElement("tbody");
tbl.appendChild(tblBody);
document.body.appendChild(tbl);

contents.addEventListener("keypress", keys);

function keys(e) {
  const keyName = e.key;
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.innerHTML = keyName;
  row.appendChild(cell);
  tblBody.appendChild(row);
  if (tblBody.rows.length > 10) {
    tblBody.deleteRow(0);
  }
}
keys();
