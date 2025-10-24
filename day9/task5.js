function first() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("1"));
  });
}
function second() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("2"));
  });
}
function third() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("3"));
  });
}

Promise.all([first(), second(), third()]).then((message) => {
  console.log(message);
});
