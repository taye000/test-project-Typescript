//using default parameters

const bookings: any = [];

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
