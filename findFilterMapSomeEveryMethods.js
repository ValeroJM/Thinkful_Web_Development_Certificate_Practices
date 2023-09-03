const parks = [
    { name: "Biscayne", rating: 4.2 },
    { name: "Grand Canyon", rating: 5 },
    { name: "Gateway Arch", rating: 4.5 },
    { name: "Indiana Dunes", rating: 4.1 },
  ];

//The find() method will verify a condition and return the first element that satisfy the condition and return the element. Example:
let found = parks.find((park) => park.name === "Biscayne");

console.log(found);

//The filter() method will verify a condition and return an array of elements that satisfy the fintering. Example:
let result = parks.filter((park) => park.rating >= 4.5);

console.log(result);

//The map() method will return all the values we specify into a new array. Example:
const parkNames = parks.map((park) => park.name);

console.log(parkNames);

//The some() method will validate if the condition is met by any of the elements and return a boulean. Example:
const isAParkRateBiggerThan4 = parks.some((park) => park.rating > 4.5);

console.log(isAParkRateBiggerThan4);

//The every() method will validate if all the elements met the condition and return a boulean value. Example:
const areAllTheParksRateBiggerThan4 = parks.every((park) => park.rating > 4);

console.log(areAllTheParksRateBiggerThan4);