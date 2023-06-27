const heroes = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

/*heroes.push(dc)
console.log(heroes);
*/

// console.log(heroes[3][1]);

const all = heroes.concat(dc)
console.log(all);


const all_new = [...heroes,...dc]
console.log(all_new);

const arr2 = [1,2,3,4,5,6,[1,2,3],7,[8,3],[4,9,[1,9,2]]]
const real_array = arr2.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("khushi"));
console.log(Array.from("khushi"));
console.log(Array.from({name:"khushi"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));











