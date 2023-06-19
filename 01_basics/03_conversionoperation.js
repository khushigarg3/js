let score = "33acb"

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber);
 
// "33" -> 33
// "33abc" -> Nan
//  true -> 1 , false -> 0
 
let isLoggedIn  = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true
// "" -> false
//  "xyz" -> true

let someNumber = 67

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)