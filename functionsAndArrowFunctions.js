//Regular Function Declarion
function functionDeclaration(){
    console.log("I am a function declaration!");
}

functionDeclaration(); //We execute it by calling the funtionName and its ()

//This is function expresion
//We asigned to a variable the function
const functionExpresion = function printFunctionExpresion() {
    console.log("I am a function expresion!")
}

functionExpresion(); //We call the funtion expresion by typing the variable name and adding ()

//Another way to declare a function expresion in anonymous way. 
//We asigned to a variable the anonymous function. To define it we do NOT provide a name to the function after the keyword function
const anonymousFunction = function(){
    console.log("I am an anonymous function expresion!")
} 

anonymousFunction(); //We call the anonymous funtion expresion by typing the variable name and adding ()

//This is an Arrow functions
//This type of functions are useful when you only have one action to execute, if you have more then is better to use any other of the other types of function declaration
const anonymousArrowFunction = () => console.log("I am an arrow anonymous function!");

anonymousArrowFunction(); //We call the anonymous arrow funtion by typing the variable name and adding ()


//Thinkful Example
// Function declaration
function ratingAsText(park) {
    console.log("This is a function declaration.");
    return park.rating > 4 ? "Excellent!" : "Good";
  }
  
  // Function expression
  const ratingAsTextNamed = function ratingToWord(park) {
    console.log("This is a function expression that has a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
  };
  
  // Anonymous function expression
  const ratingAsTextAnonymous = function (park) {
    console.log("This is an anonymous function that does not have a name.");
    return park.rating > 4 ? "Excellent!" : "Good";
  };