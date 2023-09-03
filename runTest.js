const parks = [
  {
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: { state: "Utah" },
  },
  {
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: { state: "Oregon" },
  },
  {
    name: "Lake Clark",
    areaInSquareKm: 10602,
    location: { state: "Alaska" },
  },
  {
    name: "Kenai Fjords",
    areaInSquareKm: 2710,
    location: { state: "Alaska" },
  },
  {
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];

function findParkByName(parks, name) {
  let solution = null;
  let logPark = parks.find((park) => park.name === name);
  
  if (logPark !== "undefine"){
    solution = logPark;
  }
  return solution;
};

console.log(findParkByName(parks,"Zion"));


function getBigParkNames(parks, minSize) {
  let logParks = parks.filter((park) => park.areaInSquareKm >= minSize);
  let parkList = logParks.map((park) => park.name);
  return parkList;
}

console.log(getBigParkNames(parks,2000));
