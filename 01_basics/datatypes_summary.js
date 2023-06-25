// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

const bigNo = 3762371562716236782n


// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman","pokemon","doga","nagraj"]
let myObj = {
    name:"khushi",
    age:21,

}

const myFunc = function(){
    console.log("HELLO WORLD");
}

console.log(typeof bigNo);

// Dynamically typed lang.
