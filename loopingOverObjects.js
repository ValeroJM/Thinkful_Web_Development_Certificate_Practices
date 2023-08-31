/*
let cart = {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

let cart = {
    "Canvas Tote Bag": { quantity: 2, priceInCents: 1800 },
    "Black and White Chuck On Dress": { quantity: 1, priceInCents: 4400 },
    "Natural Straw Wide Brim Hat": { quantity: 1, priceInCents: 2250 },
    "Blue Stripe Casual Shirt": { quantity: 3, priceInCents: 2000 },
  }


function calculateCartTotal(cart) {
    let total = 0;
    for (let item in cart){
      const list = cart[item];
      total += list.quantity * list.priceInCents; 
    }
    return total;
  }
  
function printCartInventory(cart) {
let inventory = [];
for (let item in cart){
    const list = cart[item];
    inventory.push(list.quantity+"x"+item);
}
return inventory.join("\n");
}

console.log(printCartInventory(cart));