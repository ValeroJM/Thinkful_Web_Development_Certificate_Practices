/*setInterval()
The setInterval() method repeats the execution of a function at a certain time interval. The syntax is similar to setTimeout():
Ex.:
setInterval(callback function, delay, (optional) argument)
*/

function repeatMessage(){
    console.log("hey there! This message will be printed every second");
  }
  
  setInterval(repeatMessage, 1000); // Calls repeatMessage() every 1,000 milliseconds