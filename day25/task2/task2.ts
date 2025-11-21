const container = document.getElementById("container") as HTMLDivElement;
const prevBtn = document.getElementById("prev") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;

const images = [
  "imgs/image4.png",
  "imgs/image1.png",
  "imgs/image2.png",
];
let currentImage = 0;
const stylediv=document.createElement("div")
const image = document.createElement("img");
image.style.padding = "20px";
image.style.animationName="slid";
image.style.animationDuration="1.5s";
function newImg() {
  image.src = images[currentImage];
}
container.appendChild(image);
document.body.appendChild(container)


/*
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
} */
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


