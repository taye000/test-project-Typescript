const arr = [1, 2, 3, 4, 5];
const workingdays = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const restaurant = {
  name: "el polo locos",
  location: "Nairobi",
  categorires: ["italian", "mexican", "pizzeria"],
  starterMenu: ["GarlicBread", "salad"],
  mainMenu: ["pizza", "pasta"],
  appetizers: { nutty: "groundnuts" },
  openingHours: {
    [workingdays[3]]: {
      open: 10,
      close: 22,
    },
    [workingdays[4]]: {
      open: 10,
      close: 22,
    },
    [workingdays[5]]: {
      open: 9,
      close: 18,
    },
  },
  //.this refers to restaurant object that we're in
  order(starterIndex: any, mainIndex: any) {
    console.log(
      `${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`
    );
    return `${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`;
  },
};

//calling order function with set parameters
restaurant.order(0, 1);

const { sat } = restaurant.openingHours;
console.log(sat);

//rest operators for destructuring arrays, objects and for use in functions(multiple parameters)
const [a, b, c, ...others] = arr;

//add function using multiple parameters rest operators
function add(...numbers: any) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
// add(...arr);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

//looping through array using 'For Off' loop
// for (const item of menu) console.log(item);

//For Off indexing loop
// for (const item of menu.entries()) console.log(item);

//modern way of doing the above (using array desrutcuring)
for (const [index, item] of menu.entries())
  console.log(`${index + 1}. ${item}`);

const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

//loop through days array and using destructuring to get the value of each day
//optional chaining ? operator to check if the value is defined and knowledge coalescing operator ?? to get
//the value if it is defined or else return the default value
for (const day of days) {
  const open: any = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}00 hrs`);
}

//optional chaining ? and knowledge coalescing operator ?? with functions
console.log(restaurant.order?.(0, 1) ?? "function not defined");

//optional chaining ? and knowledge coalescing operator ?? to check if an array is empty
const users = [
  {
    name: "John",
    email: "john@gmail.com",
  },
];
console.log(`user ${users[0]?.name ?? "empty user array"} `);

//accessing object property names using Object.keys()
const properties = Object.keys(restaurant.openingHours);
console.log("properties", properties);
let str = `we are open ${properties.length} days a week. `;
for (const day of properties) {
  str += `${day} `;
}
console.log(str);

//accessing object property values using Object.values()
const values = Object.values(restaurant.openingHours);
console.log("values", values);

//accessing object using Object.entries()
const entries = Object.entries(restaurant.openingHours);
console.log("entries", entries);

//accessing array using .entries()
for (const [index, day] of workingdays.entries()) {
  console.log(index + 1, day);
}

//destructure opening hours array & the open & close object values
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

const game = {
  team1: "Bayern Munich",
  team2: "Real Madrid",
  odds: {
    team1: 1.3,
    x: 3.2,
    team2: 2.5,
  },
};

for (const [team, odd] of Object.entries(game.odds)){
  //if team is 'x', then print 'draw' else print the team name
  const str = team === 'x' ? 'draw' : `victory for ${game}`; // ${game[team]}
  console.log(`Odd of ${str} is ${odd}`);
  console.log(team, odd);
  
  
}