const content = document.getElementById("content");
  fetch  ("https://randomuser.me/api/?results=5")
  .then(response=>response.json())
  .then(data =>{
    data.results.forEach((item) => {
      let li = document.createElement("li");
      li.style.listStyle = "none";
      li.innerHTML = `
        <p>${item.name.first}</p>
        <img src="${item.picture.medium}"></img>
        <p>${item.email}</p>
      `;
      content.appendChild(li);
    });
    let button=document.createElement('button')
    button.textContent="shuffle users";
    document.body.appendChild(button)

    button.addEventListener("click",function(){
      window.location.reload();
    })
  })
  .catch(error=>console.error('Error',error))
