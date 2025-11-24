const container = document.getElementById("container");
const cross = document.getElementById("cross");

cross.addEventListener("click", close);
function close() {
  container.style.display = "none";
}

window.document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    container.style.display = "none";
  }
});

window.document.addEventListener("click", (event) => {
  if (!container.contains(event.target)) {
    close()
  }
});
