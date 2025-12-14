const input = document.getElementById("search");
const content = document.getElementById("content");

const text = content.innerText;
input.addEventListener("input", () => {
  const searchText = input.value;

  if (searchText === "") {
    content.innerHTML = text;
    return;
  }
  const parts = text.split(searchText);

  content.innerHTML = parts.join(
    `<span class="highlight">${searchText}</span>`
  );
});