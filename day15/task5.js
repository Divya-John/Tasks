function matrix(arr) {
  for (i = 0; i < arr.length; i++) {
    let index;
    if (arr[i].includes(0)) {
      index = arr[i].indexOf(0);
      arr[i] = arr[i].map((x) => (x = 0));
      console.log(arr[i]);
      return index;
    }

    arr[i] = arr[i].map((x) =>{
       console.log(arr[i].indexOf(arr[i])===index)}
    );
    // console.log(arr[i]);
    // if(i===index){
    //   arr[i]===0
    //   console.log(arr[i])
    // }
    // for (j = 0; j < arr[i].length; j++) {}
  }
}
console.log(
  matrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
