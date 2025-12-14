function isValidHtmlLikeString(str){
  const stack=[]
  let i=0;

  while(i<str.length){
    if(str[i]!=="<"){
      i++
      continue;
    }

    const j=str.indexof(">",i);

    if(j===-1) return false;

    let inside=str.slice(i+1,j).trim();
    if(inside.length===0) return false;

    const isClosing=inside[0]==="/"
    const isSelfClosing=inside.endsWith("/")

    if(isClosing){
      const tagName=inside.slice(1).trim();
      if(tagName.length===0) return false;

      if(stack.length===0) return false;
      const top=stack.pop();
      if(top!==tagName) return false;
    }
    else if(isSelfClosing){
      const parts=inside.slice(0,-1).trim().split(/\s+/)
      const tagName=parts[0]
      if(!tagName) return false;
    }
    else{
      const parts=inside.split(/\s+/)
      const tagName=parts[0]
      if(!tagName) return false;
      stack.push(tagName)
    }
    i=j+1
  }

  if(/[<>]/.test(stack.length===0?"":"")){}
  return stack.length===0
}
