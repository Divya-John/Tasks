var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var container = document.getElementById("container");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var originalImages = [
    "imgs/image4.png",
    "imgs/image1.png",
    "imgs/image2.png",
];
var images = __spreadArray(__spreadArray([
    originalImages[originalImages.length - 1]
], originalImages, true), [
    originalImages[0],
], false);
var currentImage = 1;
var interval;
var isAnimating = false;
var divcontainer = document.createElement("div");
divcontainer.className = "slider";
divcontainer.style.flexShrink = "0";
container.appendChild(divcontainer);
images.forEach(function (item) {
    var image = document.createElement("img");
    image.src = item;
    divcontainer.appendChild(image);
});
function newImg() {
    divcontainer.style.transition = "transform 0.5s ease-in-out";
    divcontainer.style.transform = "translateX(-".concat(currentImage * 500, "px)");
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
divcontainer.addEventListener("transitionend", function () {
    isAnimating = false;
    if (currentImage === images.length - 1) {
        divcontainer.style.transition = "none";
        currentImage = 1;
        divcontainer.style.transform = "translateX(-".concat(currentImage * 500, "px)");
    }
    if (currentImage === 0) {
        divcontainer.style.transition = "none";
        currentImage = originalImages.length;
        divcontainer.style.transform = "translateX(-".concat(currentImage * 500, "px)");
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
