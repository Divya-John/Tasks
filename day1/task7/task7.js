const res = document.getElementById("list");

const fetchAPIData = async () => {
  
  const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result1 = await res1.json();
  console.log(result1);
  const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
  const result2 = await res2.json();
  console.log(result2);

  result2.forEach((item) => {
    if (result1.userId === result2.id) {
      result1.forEach((item1) => {
        let li = document.createElement("li");
        li.style = "padding:20px; border:2px solid black;";
        li.style.listStyle = "none";
        li.innerHTML = `
          <div>
            <h5>${item.name}</h5>
            <p>email : ${item.email}</p>
            <h3>${item1.title}</h3>
            <p>${item1.body}</p>
          </div>
          `;
        res.appendChild(li);
      });
    }
    });
   

};
fetchAPIData();