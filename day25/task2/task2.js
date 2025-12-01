"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container = document.getElementById("container");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const originalImages = [
    "imgs/image4.png",
    "imgs/image1.png",
    "imgs/image2.png",
];
const images = [
    originalImages[originalImages.length - 1],
    ...originalImages,
    originalImages[0],
];
let currentImage = 1;
let interval;
let isAnimating = false;
let divcontainer = document.createElement("div");
divcontainer.className = "slider";
divcontainer.style.flexShrink = "0";
container.appendChild(divcontainer);
images.forEach((item) => {
    const image = document.createElement("img");
    image.src = item;
    divcontainer.appendChild(image);
});
function newImg() {
    divcontainer.style.transition = "transform 0.5s ease-in-out";
    divcontainer.style.transform = `translateX(-${currentImage * 500}px)`;
}
function prevs() {
    if (isAnimating)
        return;
    isAnimating = true;
    currentImage--;
    if (currentImage < 0) {
        currentImage = originalImages.length - 1;
    }
    newImg();
}
function next() {
    if (isAnimating)
        return;
    isAnimating = true;
    currentImage++;
    newImg();
}
divcontainer.addEventListener("transitionend", () => {
    isAnimating = false;
    if (currentImage === images.length - 1) {
        divcontainer.style.transition = "none";
        currentImage = 1;
        divcontainer.style.transform = `translateX(-${currentImage * 500}px)`;
    }
    if (currentImage === 0) {
        divcontainer.style.transition = "none";
        currentImage = originalImages.length;
        divcontainer.style.transform = `translateX(-${currentImage * 500}px)`;
    }
});
newImg();
function pause() {
    interval = setInterval(next, 3000);
}
function nopause() {
    if (interval !== undefined) {
        clearInterval(interval);
    }
}
pause();
divcontainer.addEventListener("mouseover", nopause);
divcontainer.addEventListener("mouseout", pause);
if (nextBtn) {
    nextBtn.addEventListener("click", next);
}
if (prevBtn) {
    prevBtn.addEventListener("click", prevs);
}
//# sourceMappingURL=task2.js.map