
const container = document.getElementById("container");

const tbl=document.createElement("table")
tbl.setAttribute("border","1")
tbl.style.marginTop = "20px";
tbl.style.borderCollapse = "collapse";
tbl.style.width = "200px";

const thd = document.createElement("thead");
const headerRow=document.createElement("tr")
const th1=document.createElement("th")
th1.textContent="Keys"
headerRow.appendChild(th1);
const th2 = document.createElement("th");
th2.textContent = "Code";
headerRow.appendChild(th2);
const th3 = document.createElement("th");
th3.textContent = "Timestamp";
headerRow.appendChild(th3);
thd.appendChild(headerRow);
tbl.appendChild(thd)

const tblBody=document.createElement("tbody");
tbl.appendChild(tblBody)

document.body.appendChild(tbl)

container.addEventListener("keypress",keys)

function keys(e){
  const keyName = e.key;
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.innerHTML = keyName;
  row.appendChild(cell);
  tblBody.appendChild(row);

  const keyCode = e.code;
  const cell1 = document.createElement("td");
  cell1.innerHTML = keyCode;
  row.appendChild(cell1);

  const keyTimestamp = e.timeStamp;
  const cell2 = document.createElement("td");
  cell2.innerHTML = keyTimestamp;
  row.appendChild(cell2);
  

  if(tblBody.rows.length>10){
    tblBody.deleteRow(0)
  }
}
keys()