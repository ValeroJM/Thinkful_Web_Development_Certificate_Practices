let products = [
    {
      name: "Court Sneaker",
      priceInCents: 9800,
      availableSizes: [5.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    },
    {
      name: "Relaxed Silk Shirt",
      priceInCents: 9800,
      availableSizes: [0, 10, 12, 2],
    },
    {
      name: "Square-Neck Jumpsuit",
      priceInCents: 8800,
      availableSizes: [6, 10, 14, 2, 12],
    },
  ];
  
  const cart = {
    "Square-Neck Jumpsuit": {
      priceInCents: 8800,
      quantity: 1,
    },
    "Relaxed Silk Shirt": {
      priceInCents: 9800,
      quantity: 2,
    },
  };
  
  function chooseItemByNameAndSize(products, name, size) {
    let selected = null;
    // write your solution here. See the hint in the instructions if you need help.
    for (let item in products){
      let product = products[item];
  
      if (product.name === name && product.availableSizes.includes(size)){
        selected = product;
      }
    
    }
    
    return selected;
  }
  
  function calculateTotal(cart) {
    let result = 0;
    // write your solution here. See the hint in the instructions if you need help.
    for (let name in cart) {
      const item = cart[name];
      result += item.quantity * item.priceInCents;
    }
    return result;
  }
  
  function printReceipt(cart) {
    const total = calculateTotal(cart);
    // write your solution here. See the hint in the instructions if you need help.
    if (!total) return null;
  
    let result = "";
    for (let name in cart) {
      const { quantity, priceInCents } = cart[name];
      const amount = printablePrice(quantity * priceInCents);
      result += `${quantity}x${name} - ${amount}\n`;
    }
    return result + `Total: ${printablePrice(total)}`;
  }
  
  console.log(chooseItemByNameAndSize(products,"Relaxed Silk Shirt",12));