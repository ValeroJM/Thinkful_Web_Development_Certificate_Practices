function useSetTimeout() {
    console.log("Start!");
  
    setTimeout(() => {
      console.log("Inside setTimeout!");
    }, 1000);
  
    console.log("End!");
  }
  
  useSetTimeout();

  //We were expecting to have Start! > Inside setTimeout! > End! --- But because it is Asyncronous code we will have Start! > End! > Inside setTimeout! after 1 second


console.log("Test Start!"); // Synchronous code

setTimeout(() => {
  console.log("Inside Test first setTimeout!"); // Asynchronous code
}, 0);

setTimeout(() => {
  console.log("Inside Test second setTimeout!"); // Asynchronous code
}, 0);

console.log("Test End!"); // Synchronous code