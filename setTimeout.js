/*setTimeout()
The setTimeout() method allows programmers to delay the execution of a function. It takes two arguments: the function to be executed and the number of milliseconds that the timer should wait before executing the code.

Here's the syntax:

setTimeout(callback function, delay);
*/

function orderNumber(number){
    console.log(`here is order no. ${number}`);
  }
  
  setTimeout(orderNumber, 3000, 1); // Delay 3 seconds (3,000 ms)
  setTimeout(orderNumber, 2000, 2); // Delay 2 seconds
  setTimeout(orderNumber, 1000, 3); // Delay 1 second
  
  //> Here is order no. 3
  //> Here is order no. 2
  //> Here is order no. 1

  function printName(name){
    console.log("Hello " + name);
  }
  
  setTimeout(printName, 3000, "Thundercat");
  setTimeout(printName, 2000, "Adele");
  setTimeout(printName, 1000, "Sade");