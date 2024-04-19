// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
const driverObjects = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function findMatching(arr, str) {
  return arr.filter((driver) => driver.toLowerCase() === str.toLowerCase());
}
console.log(findMatching(drivers, "sammy"));

const fuzzyMatch = (arr, str) => {
  return arr.filter((driver) => driver[0] === str[0]);
};
console.log(fuzzyMatch(drivers, "S"));

function matchName(driverObjs, str) {
  return driverObjs.filter((driver) => driver.name === str);
}
console.log(matchName(driverObjects, "Bobby"));
