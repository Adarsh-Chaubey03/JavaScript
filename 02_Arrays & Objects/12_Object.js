// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "adarsh",
    "full name": "Adarsh Chaubey",
    age: 18,
    [mySym]: "myKey1", // to use as symbol it is necessary to put in []
    location: "Bhadohi",
    email: "adarshchaubey@gmail.com", 
    loginDays: ["monday","tuesday"]
}
console.log(JsUser.email);                //adarshchaubey@gmail.com
console.log(JsUser["full name"]);         //Adarsh Chaubey

JsUser.email= "adarsh8y83@gmail.com"
console.log(JsUser["email"]);             //adarsh8y83@gmail.com

// Object.freeze(JsUser)                     // no further change

JsUser.email= "adarsh8y83@gmail.com"
console.log(JsUser["email"]);            //adarsh8y83@gmail.com

JsUser.greeting = function(){
    console.log("Hello User");
}

console.log(JsUser.greeting);        
console.log(JsUser.greeting());
/*
ƒ (){
    console.log("Hello User");
}
Hello User
undefined
*/

JsUser.greeting2 = function(){
    console.log(`Hello User,${this.name}`);
}
console.log(JsUser.greeting2());


// const tinderUser = new  Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = "false"

console.log(tinderUser)


const regualarUser = {
    email : "adarshchaubey@gmail.com",
    fullname : {
        Userfullname : {
            firstname: "Adarsh",
            lastname: "Chaubey"
    }
    }
}

console.log(regualarUser.fullname?.Userfullname.firstname)   // Adarsh

// ? - in case it does not exist

const obj1 = {1: "A" , 2:"b"}
const obj2 = {3: "A" , 4:"b"}

// const obj3 = {obj1,obj2}   Or
// const obj3 = Object.assign({}, obj1 , obj2) or

const obj3 =  {...obj1, ...obj2}      // {1: 'A', 2: 'b', 3: 'A', 4: 'b'}

console.log(obj3);



console.log(Object.keys(tinderUser))      // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser))    //  ['123abc', 'sam', 'false']
console.log(Object.entries(tinderUser))   // [Array(2), Array(2), Array(2)]











