const thisString = "kim is a dush";

//getting the length of the string
console.log(thisString.length);
console.log("mike".length);

//getting the element at a specific index
console.log(thisString[0]);
console.log("mike"[0]);

//getting the index of a specific element
console.log(thisString.indexOf("d"));

//getting the last index of a specific element
console.log(thisString.lastIndexOf("is"));

//slice method on strings. Does not include the last index.
//last index is also optional
console.log(thisString.slice(0, 3));

console.log(thisString.slice(0, thisString.indexOf(" ")));

//slice the last element of the string
console.log(thisString.slice(-1));

const middleSeat = function (seat: string) {
  const s = seat.slice(-1);
  if (s === "A" || s === "B") {
    console.log("middle seat😐");
  } else if (s === "C") {
    console.log("Window seat😄");
  }
};
middleSeat("1A");
middleSeat("1C");

//trim method on strings. Removes whitespace from the beginning and end of a string.
console.log("   kim is a dush   ".trim());

//replacing parts of a string by chaining replace() method
const priceGB = "297,02&";
const priceUS = priceGB.replace("&", "$").replace(",", ".");
console.log(priceUS);

//replacing parts of a string by using a regular expression
//g means global, which means it will replace all instances of the pattern
const words = "kim is a kim";
console.log(words.replace(/kim/g, "dush"));

//returning booleans
console.log(priceGB.includes("297"));

//using startsWith() and endsWith()
console.log(words.startsWith("kim"));

console.log(words.endsWith("kim"));

const checkBaggage = function (items: string) {
  const baggage = items.toLowerCase();
  if (baggage.includes("gun") || baggage.includes("knife")) {
    console.log("You can't carry a gun or knife");
  } else {
    console.log("Welcome a board");
  }
};
checkBaggage("Gun");
checkBaggage("laptop");

//using split() and join() on strings
console.log("kim,hello,world,again".split(","));

//destructure the resulting array from the above split() method
const [word1, word2, word3, word4] = "kim,hello,world,again".split(",");
console.log(word1, word2, word3, word4);

//using the join() method to join the elements of an array into a string
const newestArray = ["kim", "hello", "world", "again"];
const newestString = newestArray.join(" ");
console.log(newestString);

//capitalizing the first letter of every word in string
const capitalize = function (theNames: string) {
  const namesArray = theNames.split(" ");
  const newNamesArray = [];
  for (const n of namesArray) {
    newNamesArray.push(n.replace(n[0], n[0].toUpperCase()));
    // newNamesArray.push(n[0].toUpperCase() + n.slice(1));
    console.log(newNamesArray);
  }
};
capitalize("kim nugu");
capitalize("tee god");

//padding strings to fit desired length. Adds characters (2nd parameter) to make the string the desired length (1st parameter).
//padStart() adds the characters to the beginning and padEnd() adds the characters to the end.
const message = "here we go";
console.log(message.padStart(20, "-").padEnd(30, "-"));

//example of masking a credit card number using padding() and slice() methods
const maskCreditCard = function (creditCardNumber: any) {
  const creditCard = creditCardNumber + "";
  const creditCardLastFourDigits = creditCard.slice(-4);
  console.log(creditCardLastFourDigits.padStart(creditCard.length, "*"));
};
maskCreditCard("43523487596");
maskCreditCard(37465238465);

//using repeat() method to repeat a string a number of times
const message2 =
  " Sorry, Due to poor weather all planes have been grounded... \n";
console.log(message2.repeat(5));

//example of repeat() method in a function to repeat an emoji
const planesInQue = function (n: any) {
  console.log(`There are ${"✈️".repeat(n)} planes in que`);
};
planesInQue(5);
