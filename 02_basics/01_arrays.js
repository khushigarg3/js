const myArr = [0,1,2,3,4,5,true,"khushi"]
const heroes = ["shaktiman","pokemon","naagraj"]
const arr = new Array(1,2,1,2,3,4)
console.log(myArr[6]);

// Array methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9);
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice, splice
console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);