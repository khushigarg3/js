const name = "khushi"
const repoCount = 50

console.log(name + repoCount + "Value") 
console.log(`Hello my name is ${name} and this is repocount ${repoCount}`) // string manipulation used in modern days

const gameName = new String("khushiga")

const gameName1 = new String("khus-hi")
console.log(gameName1[0]);
console.log(gameName1.__proto__);

console.log(gameName1.length);
console.log(gameName1.toUpperCase())
console.log(gameName1.charAt(4));
console.log(gameName1.indexOf('u'))


const newString = gameName1.substring(0,4)
console.log(newString)

const anotherString = gameName1.slice(-8,4)
console.log(anotherString)

const newString1 = "   khushi    "
console.log(newString1)
console.log(newString1.trim())


const url = "https://khushi.com/khushi%20garg"
console.log(url.replace('%20','-'))

console.log(url.includes('com'))

console.log(gameName1.split('-'))