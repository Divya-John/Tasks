const heightScreen = document.getElementById("heightScreen");
const widthScreen = document.getElementById("widthScreen");


window.addEventListener("resize", screensize);

function screensize(){
  heightScreen.textContent = "height : " + window.innerHeight;
  widthScreen.textContent = "width : " + window.innerWidth;
}
screensize();