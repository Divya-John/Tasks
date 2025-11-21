var container = document.getElementById("container");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var images = ["imgs/image4.png", "imgs/image1.png", "imgs/image2.png"];
var currentImage = 0;
var image = document.createElement("img");
image.style.padding = "20px";
const animations = {
  duration: 1500, 
  easing: "ease-out",
};
function newImg() {
  image.src = images[currentImage];
  image.animate([{ opacity: 0.4 }, { opacity: 1 }], animations);
}
container.appendChild(image);

prevBtn.addEventListener("click", prevs);
function prevs() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  newImg();
}
nextBtn.addEventListener("click", next);
function next() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  newImg();
}
setInterval(next, 3000);
newImg();
