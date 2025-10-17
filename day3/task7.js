function snakecase(text){
  let newText = text.replaceAll(/[A-Z]/g,"_"+"$&".toLowerCase());
  return newText
}
console.log(snakecase("myFunction"));