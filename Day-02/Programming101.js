console.log("Rahul Arya");

// 🧩 JavaScript Data Types


// Variables: let vs const
let city = "Noida";
city = "Delhi"; // Reassigning value



const country = "India";
 // country = "USA"; ❌ Error: Assignment to constant variable



 let age = 20;
 let price = 99.99;
 console.log(typeof age); // number
 console.log(typeof price); // number



 let name = "Rahul";
 let message = 'Hello, i am Rahul Arya!';
console.log(typeof name); // string
console.log(typeof message); // string

let isStudent = true;
let isLoggedIn = false;
console.log(typeof isStudent); // boolean


let user;
console.log(user);        // undefined
console.log(typeof user); // undefined

let car = null;
console.log(car);        // null
console.log(typeof car)   // "object" (a known JavaScript quirk)

let id = Symbol("id");
console.log(typeof id); // symbol

let person = {
  name: "Alice",
  age: 25,
  isStudent: false
};
console.log(typeof person); // "object"

let numbers = [10, 20, 30, 40];
console.log(typeof numbers); // "object" (arrays are special objects)


function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"