const names:string[]=["John","Rose"]

function upper(){
  for (const name of names) {
    console.log(name.toUpperCase());
  }
}
upper()