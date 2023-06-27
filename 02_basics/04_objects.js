const tinderUser = new Object()
// const tinderUser = {}          non singleton object

tinderUser.id = "123abc"
tinderUser.name = "charu"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const user = {
    email :"khushi garg",
    fullname:{
        userfullname:{firstname:"khushi",
        lastname:"garg"
            }
    }
}

console.log(user.fullname?.userfullname.lastname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"h"
}

// const obj3 = {obj1, obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1 ,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user2 = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(user2[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    courseprice:"999",
    courseteacher: "khushi"
}

// course.courseteacher

const {courseteacher: instructor} = course       // destructioning an object

console.log(instructor);

// {
//     "name":"khushi",
//     "couse":"js in hindi",
//     "price":"999"
// }


// [
//     {},
//     {},
//     {}
// ]




