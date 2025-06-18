const person1 = {
    name: "Alice",
    age: 25
};
const person2 = person1;
person2.favoriteColor = "pink";
console.log("person1: ",person1);
console.log("person2: ",person2);

//Q6: There are 7 primitive types in JS: String, Number, Bigint, Boolean, Undefined, Null, and Symbol.
//String: Represents textual data
let country = "Canada";
console.log("Country is ", country);

//Number: Represents both integer and floating-point numbers
let age = 30;
let height = 175.5;
console.log("age is", age);
console.log("height is", height);

//Bigint: Represents integer numbers of arbitrary precision
let x = BigInt("123456789012345678901234567890");
console.log("X is", x);

//Boolean: Represents a logical entity and can only have values of true or false
let flag = true;
let a = 1;
let b = 2;
console.log(flag);
console.log(a == b);

//Undefined:  Represents a variable that has been declared but not yet assigned a value
let weather;
console.log(weather);

//Null: Represents the intentional absence of any object value
let season = null;
console.log(season);

//Symbol: Represents a unique identifier, often used to create unique property keys for objects
let key1 = Symbol("hello");
let key2 = Symbol("hello");
console.log(key1 == key2);

//Q7: Objects are containers for Properties and Methods, using to organize, structure, and manage related data and functionas in a clear and efficient manner.
/*Q8: Arrays are often used when you need to store data of the same type and the amount of data is known.  
Arrays are suitable for scenarios where elements need to be accessed frequently or elements need to be found quickly.*/ 

function myInfo(name, color){
console.log("My name is", name + " and my favorite color is", color + "!!");
}
myInfo("Jane", "pink")