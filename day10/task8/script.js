const list = document.querySelectorAll("#display");

window.addEventListener("keypress", (e) => {
  if (e.key === "a" && e.shiftKey === true) {
    list.forEach((item) => {
      if (item.style.display === "none") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
