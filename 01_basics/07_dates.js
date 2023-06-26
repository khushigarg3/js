// Dates

let myDate = new Date()
console.log(myDate);
console.log("\n")
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let createdDate = new Date(2023, 0, 23);
console.log(createdDate.toDateString());

let createdDate1 = new Date(2023, 0, 23,4, 7);
console.log(createdDate1.toLocaleString());

let createdDate2 = new Date("01-13-2009");
console.log(createdDate2)




let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate2.getTime());
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
weekday:"long",
})






