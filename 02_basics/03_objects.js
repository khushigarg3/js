// singleton

// object literals

const mySym = Symbol("key1")

// Object.create
const user = {
    name:"khushi",
    "full name":"garg",
    [mySym]:"mykey1",
    age: 18,
    location:"jaipur",
    email:"khushi@gmail.com",
    isLoggedIn: false,
    lastLogedInDays :["mon","wed"]
}

console.log(user.email);

console.log(user["email"]);

//console.log(user.full name);  not useful
console.log(user["full name"]);

console.log(user[mySym]);

user.email = "garg@gmail.com"
// Object.freeze(user)
user.email = "gargkhushi@gmail.com"
console.log(user)


user.greeting = function(){
    console.log("hlo js user");
}

user.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(user.greeting)
console.log(user.greeting())

console.log(user.greeting2())





