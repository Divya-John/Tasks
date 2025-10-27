const fileInput = document.getElementById("imageUpload");
const gallery = document.getElementById("gallery");
const deleteBtn=document.getElementById("deleteBtn")

let images=[];

function showGallery(){
  gallery.innerHTML=""
  for(let i=0;i<images.length;i++){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = images[i];
    img.width = 200;
    img.height = 150;
    
    const check=document.createElement("input")
    check.type="checkbox"
    check.value=i;

    div.appendChild(check)
    div.appendChild(img)
    gallery.appendChild(div)
  }
}

fileInput.addEventListener("change", function () {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = () => {
      images.push(reader.result);
      showGallery();
    };
    reader.readAsDataURL(files[i]);
  }
});

deleteBtn.addEventListener("click", function() {
  const checks = gallery.querySelectorAll("input[type='checkbox']");
  const newImages = [];

  for (let i = 0; i < checks.length; i++) {
    if (!checks[i].checked) {
      newImages.push(images[i]); 
    }
  }

  images = newImages;
  showGallery();
});