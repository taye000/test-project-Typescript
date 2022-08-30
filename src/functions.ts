//using default parameters

const bookings: any = [];

const flightNumber = "UPK54";
const mrT = {
  name: "Taye",
  passport: 346534635,
};
const passengersList = ["Taye", "John", "Jane"];

//include default parameters as below for passengers and price.
//if said parameters are not passed, the default value will be used.
const booking = function (flight: any, passengers: any = 1, price: any = 199) {
  const booking = {
    flight,
    passengers,
    price,
  };
  bookings.push(booking);
};

//using only 1 parameter to call this function which requirs 3 parameters.
//default parameters will be used for the other 2 parameters.
// booking("FH-09");

//to skip a parameter, use undefined as a value.
booking("FH-09", undefined, 500);

//using destructuring to access the parameters from the object returned from the bookings array.
const { flight, passengers, price } = bookings[0];

console.log(flight, passengers, price);

//passing different types parameters to functions
const checkin = (passenger: any) => {
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 346534635) {
    console.log("Welcome aboard " + passenger.name);
  } else {
    console.log("You are not booked for this flight");
  }
};

checkin(mrT);

//using rest parameters to pass multiple parameters to a function.
const printPassengers = (...passengers: any[]) => {
  for (const passenger of passengers) {
    console.log("Passenger name: " + passenger);
  }
};

printPassengers(...passengersList);

//generating a random number between 0 and 1000000
const newPassport = (person: any) => {
  person.passport = Math.trunc(Math.random() * 1000000);
  console.log(person.passport);
};

newPassport(mrT);

//Higher order functions are functions that take other functions as parameters or return functions or both
//The functions that are passed to higher order functions are called "callbacks" or callback functions.

const greet = () => {
  console.log("Hello");
};
//addEventListener takes 2 parameters, the first is the event type, the second is the callback function.
// addEventListener("click", greet);


//function that removes the spaces from a string.
const oneWord = (str: string) => {
  console.log(str.replace(/ /g, "").toLowerCase());
  
  return str.replace(/ /g, "").toLowerCase();
};
//function that returns the 1st word as uppercase and the rest as lowercase.
const upperFirstWord = (str: string) => {
  const [first, ...others] = str.split(" ");
  console.log([first.toUpperCase(), ...others].join(" "));
  
  return [first.toUpperCase(), ...others].join(" ");
};
oneWord("Hello, World");
upperFirstWord("Hello World");