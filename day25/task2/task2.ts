const container = document.getElementById("container") as HTMLDivElement;
const prevBtn = document.getElementById("prev") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;

const images = [
  "imgs/image4.png",
  "imgs/image1.png",
  "imgs/image2.png",
];
let currentImage = 0;
const image = document.createElement("img");
image.style.padding = "20px";
function newImg() {
  image.src = images[currentImage];
}
container.appendChild(image);

// image.addEventListener("mouseover", (event) => {
//   newImg()
// });

prevBtn.addEventListener("click", prevs)
function prevs() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  newImg();
};
nextBtn.addEventListener("click", next )
function next() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  newImg();
}
setInterval(next,3000)
newImg();