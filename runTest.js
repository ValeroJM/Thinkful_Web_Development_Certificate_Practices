const product = {
    name: "Geometric Print Swim Shorts",
    colors: {
      pink: {
        priceInCents: 1499,
        availableSizes: ["XS", "S", "M", "XL"],
      },
      blue: {
        priceInCents: 999,
        availableSizes: ["M", "L", "XL"],
      },
    },
  };
  
  
  function printColors ({ colors }) {
    const result = Object.keys(colors);
    console.log(result.join(" and "))
  }
  
  printColors(product);