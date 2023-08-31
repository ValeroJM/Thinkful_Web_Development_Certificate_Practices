//It will display all the enviroment using terminal
//You need to run $node test.js
console.log(process.env);

//It also will return the evironment NODE_ENV that you can define preiously
//by running $NODE_ENV=development node test.js
//First we are defining the enviroment $NODE_ENV=development
//Then running the test.js file in the same line
console.log(process.env.NODE_ENV);

//We can also pass argument in the same line like below
//$node plant-facts.js "Pretzel Bean"

//This command will print in an array the arguments we pass into the function
console.log(process.argv);