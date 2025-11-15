function Once(){
  let executed=false;
  return function(){
    if(!executed){
      executed=true
      console.log("Initialized");
    }
  }
}
const initialize = Once() 
initialize(); 
initialize();