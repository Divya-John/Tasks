function Once(): Function {
  let executed: boolean = false;
  return function (): void {
    if (!executed) {
      executed = true;
      console.log("Initialized");
    }
  };
}
const initialize = Once();
initialize();
initialize();
