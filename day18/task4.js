function Once(){
  return function(){
    console.log("Initialized");
  }
}
const initialize = Once() 
initialize(); 
initialize();