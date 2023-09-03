// Explanation of a Higer Order Function: Any function that either accepts a function as one of its incoming arguments or returns a function

//For example, suppose that you created a shop and wished to give discounts on some items. You could create a function to calculate the discounted price as follows:
const discountedPrice = (price, discount) => price * discount;

//Then you could call the function to calculate final prices for some items with a 10% discount, like this:
const finalPriceBed = discountedPrice(200, 0.9); // 90% of $200
const finalPricePillow = discountedPrice(52, 0.9); // 90% of $52
const finalPriceCurtain = discountedPrice(32, 0.9); // 90% of 32 

//Imagin now that you want to calculate 25%
//Check the notes. This is kind of confusing