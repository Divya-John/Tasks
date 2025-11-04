function sort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}
console.log(sort([5, 4, 1, 2, 3]));