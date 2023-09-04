//The sort method will modify the same array an return the result of the sorting process in the same array
//Exampler 1
const oneDigictNumbers = [3,5,6,2,1,4];

oneDigictNumbers.sort();

console.log("Sorting an Array of one digit numbres: ");
console.log(oneDigictNumbers);

//Exampler 2
const moreThanOneDigictNumbers = [33,157,56,2,413,64];

//This sorting way will not sort the number correctly if the array contains number with more than one digit: moreThanOneDigictNumbers.sort(); -> It will only consider the first digit and return something like this [157,2,33,413,56,64]
//This is the way to fix that:
moreThanOneDigictNumbers.sort((a,b) => a - b); //This is for ascending order
//The next one will be for for descending order: 
//moreThanOneDigictNumbers.sort((a,b) => b - a);

console.log("Sorting an Array of more than one digit numbres: ");
console.log(moreThanOneDigictNumbers);

//Example 3
const parks =[
    "Zion",
    "Grand Canyon",
    "Arches",
    "Badlands"
];

//This will sort the names in alpabetic order and return the same array with the sorted array
parks.sort();

console.log("This is the parks array in alphabetical order:");
console.log(parks);

//Example 4
const parksCapitalAndLowCaseLetters =[
    "Zion",
    "grand Canyon",
    "Arches",
    "badlands"
];

//This sorting won't work properly if the names are capital and lower case letters in the same array. Capital letters will be first and lower case letters will be after if we use this way: parksCapitalAndLowCaseLetters.sort();
//To solved this limitation we will need to include an arrow funtion to sort the elements correctly
parksCapitalAndLowCaseLetters.sort((parkA, parkB) => parkA.toLocaleLowerCase() < parkB.toLocaleLowerCase() ? -1 : 1); //This is from a to z
//The next one will be to sort from z to a
//parksCapitalAndLowCaseLetters.sort((parkA, parkB) => parkA.toLocaleLowerCase() > parkB.toLocaleLowerCase() ? -1 : 1);

console.log("This is the parks array in alphabetical order with capital and lower case letters:");
console.log(parksCapitalAndLowCaseLetters);
