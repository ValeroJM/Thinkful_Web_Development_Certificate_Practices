//Here is a function that will return a value in cents
function calculatePriceInDollars(priceInCents) {
    return priceInCents / 100;
  }

//Imaging that you call the funtion without argument
console.log("Case 1: calling the calculatePriceInDollars() with no arguments. Value: " +  calculatePriceInDollars()); //> It will return NaN

//Now lets set the argument to a default value using = value to control the flow even when the user does not enter a value
function calculatePriceInDollars2(priceInCents = 0) {
    return priceInCents / 100;
  }

//Now we are using the second function that has the default values assigned to 0
console.log("Case 1: calling the calculatePriceInDollars2() with no arguments. Value: " +  calculatePriceInDollars2()); //> It will return 0