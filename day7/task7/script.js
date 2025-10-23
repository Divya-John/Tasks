const scrollContainer = document.getElementById("scroll-container");
const progressBar = document.getElementById("progressBar");
scrollContainer.addEventListener("scroll", () => {
  const scrollTop = scrollContainer.scrollTop;
  const scrollHeight =
    scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
});
