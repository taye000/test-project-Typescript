const theArray = [1,2,"hello world", true];
const string = "hello,world,again";

//The slice( ) method copies a given part of an array 
//and returns that copied part as a new array. It doesn’t change the original array.
//It does not include the end index.
const newArray = theArray.slice(0,2);

//Slice() can also be used on strings
const newStr =string.slice(0,2);

//The splice( ) method changes an array, by adding or removing elements from it.
//removing 2 elements from theArray from index 0
theArray.splice(0,2);

//adding elements to the beginning of theArray
theArray.splice(0,0,"kim", true);


//The split( ) method is used for strings. It divides a string into substrings 
//and returns them as an array. 
//It takes 2 parameters(1st parameter is the separator character, the 2nd is the number of splits), and both are optional.
const newstrArray = string.split(",");

//The split( ) method doesn’t work directly for arrays. However, we can first convert the elements of our array to a string, then we can use the split( ) method.
const myString = theArray.toString();

//returns the 1st 2 elements of string as an array
const anotherstrArray = myString.split(",", 2);


const anotherArray = ["kim", "hello", "world", "again"];
//The join( ) method is used for arrays. It joins all the elements of an array into a string.
//It takes 1 parameter(the separator character), and it is optional.
const thisFnArray = anotherArray.join("");
console.log(thisFnArray);
