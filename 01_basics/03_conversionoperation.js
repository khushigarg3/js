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


// *********************Operations***********************
let value= 3
let negValue = -value
console.log(negValue);

console.log(2+3);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello"
let str2 = " khushi"
let str3 = str1+str2
console.log(str3);

console.log("1"+2)
console.log("1"+"2")
console.log("1"+2+2);
console.log(1+2+"2")

console.log(+true);
console.log(+"")


let num1 , num2 , num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);