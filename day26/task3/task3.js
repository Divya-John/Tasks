
const menu = document.getElementById("menubar");
const displayBox = document.getElementById("box");
const cross = document.getElementById("cross");

const liItems = document.querySelectorAll(".liItems");

liItems.forEach((item) => {
  const content = item.querySelector(".content");  
  const dropdown = item.querySelector(".dropdown"); 

  content.style.display = "none";

  dropdown.addEventListener("click", () => {
    if (content.style.display === "none") {
      content.style.display = "block";
      dropdown.style.transform = "rotate(180deg)";
    } else {
      content.style.display = "none";
      dropdown.style.transform = "rotate(0deg)";
    }
  });
});

displayBox.style.display = "none";
cross.style.display = "none";

menu.addEventListener("click", () => {
  displayBox.style.display = "block";
  menu.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  displayBox.style.display = "none";
  menu.style.display = "block";
  cross.style.display = "none";
});
