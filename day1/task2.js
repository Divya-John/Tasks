const str = "CAT";
for (i = 0; i < str.length; i++) {
  console.log(str.slice(0,i+1));
}
for (j = 1; j < str.length; j++) {
  console.log(str.slice(-2,j+1));
}
