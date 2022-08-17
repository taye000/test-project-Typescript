//you can use functions in objects but not in maps

//creating a new set
const ordersSet = new Set(["pizza", "burgers", "spaghetti", "pizza"]);
// console.log(ordersSet); //deletes duplicates

// console.log(ordersSet.size); //returns the size of the set

// console.log(ordersSet.has("pizza")); //returns true if the set has the value

ordersSet.add("pasta"); //adds the value to the set

// console.log(ordersSet);

ordersSet.delete("pasta"); //deletes the value from the set

// console.log(ordersSet);

//iterate or loop through the set
// for (const order of ordersSet){
//     console.log(order);
// }

const staff = ["manager", "waiter", "cook", "manager", "waiter", "cook"];

//unpacking the Set into the array
const staffSet = [...new Set(staff)];
// console.log(staffSet);

//maps
//creating a new map
const rest = new Map();

//mapname.set() adds a key value pair to the map
rest
  .set("name", "classic")
  .set("cuisine", "italian")
  .set("open", 11)
  .set("close", 22)
  .set("categories", ["pizza", "pasta", "burgers"])
  .set(true, "we are open");

//comparing the time with the open and close times
const time = 21;

//mapname.get() retrives the value from the map key value pair
//(time > rest.get("open") && time < rest.get("close") check returns a boolean
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

//check if a value exists, returns boolean
console.log(rest.has("categories"));

//delete values
rest.delete("cuisine");

//check rest size
console.log(rest.size);

const array = [1, 2];
rest.set(array, "testing");
console.log(rest.get(array));

//creating a new map
const questionare = new Map([
  [true, "john"],
  [false, "30"],
]);

//create array from the map
const queryArray = [...questionare.values()];

//to get the last value in the array using pop()
const lastValue = [...questionare.values()].pop();

//delete values from the map
questionare.delete(true);

let openingHours = { open: 1 };

//convert object to map
const hours = new Map(Object.entries(openingHours));
console.log(hours);

//iterate over the map
for (const [key, value] of questionare) {
  if (typeof key === "boolean") {
    console.log(key, value);
  }
}

//using prompt to ask the user for input
//will only work on browser not vscode terminal
// const names = String(prompt("your name", "name"));

//convert map to array
console.log([...questionare]);

console.log(questionare.keys());

console.log(questionare.values());
