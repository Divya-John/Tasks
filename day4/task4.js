function pattern(str){
  for (i = 0; i < str.length - i; i++) {
    return str.slice(0, i + 1);
  }

  for (i = 0; i < str.length; i++) {
    return str.slice(i);
  }
}
pattern('CAT')

