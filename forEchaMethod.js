//Here we have an array of objects
let parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

//We will loop throw the array an print the name
//To do that we can first create an anonymous arrow function

const logPark = park => console.log(park.name);

//Instead of creating a loop we can use the forEach() method to loop throw the array in this way
parks.forEach(logPark);

parks.forEach((park, index, collection) => {
  console.log(`(${index + 1}/${collection.length}) ${park.name}`);
});
