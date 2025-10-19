function rgbHex(rgb){
  let result='#'
  for(let i=0;i<rgb.length;i++){
    let hex=rgb[i].toString(16);
    if(hex.length===1){
      hex='0'+hex;
    }
    result+=hex
  }
  return result.toUpperCase()
}
console.log(rgbHex([255, 165, 0]));