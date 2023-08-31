const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];

const finalList = [...ownedBooks,...wishlist]; //This way ... will create a new array concatening both arrays

console.log(finalList); 

//You can do the same with objects
const product = {
    book: {
      title: "Infernal Devices",
      author: "K.W. Jeter",
    },
    priceInCents: 1950,
  };

const salesTax = { state: "Washington", tax: 0.065 };

const sale = { ...product, ...salesTax };
console.log(sale);

//You can also overwrite some values with a logic. Notice that the priceInCent value was overwriten by a new logic
const sale2 = {
    ...product,
    ...salesTax,
    priceInCents: product.priceInCents * (1 + salesTax.tax),
  };

console.log(sale2);