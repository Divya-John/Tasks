const liItems = document.querySelectorAll(".liItems");

liItems.forEach((item)=>{
  const items = item.querySelector(".items");
  const itemsH1 = item.querySelector(".itemsH1");

  items.style.display = "none";

  itemsH1.addEventListener("mouseenter", () => {
    items.style.display = "block";
  });

  items.addEventListener("mouseleave", () => {
    items.style.display = "none";
  });
})

const items = document.querySelectorAll(".items");

items.forEach((item) => {
  const sub = item.querySelector(".sub");
  const subitem = item.querySelector(".subitem");

  sub.style.display = "none";

  item.addEventListener("mouseenter", () => {
    sub.style.display = "block";
  });

  sub.addEventListener("mouseleave", () => {
    sub.style.display = "none";
  });
});

