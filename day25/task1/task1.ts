const content = document.getElementById("content") as HTMLUListElement;

let pageno = 1;
const fetchAPIData = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageno}&_limit=10`
  );
  const data = await response.json();

  data.forEach((item) => {
    let li = document.createElement("li");
    li.style = "padding:20px; border:1px solid black;";
    li.style.listStyle = "none";
    li.innerHTML = `
      <div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
      `;

    content.appendChild(li);
  });
};
fetchAPIData();

addEventListener("scrollend",next);
function next(){
  pageno++;
  fetchAPIData(pageno);
}
