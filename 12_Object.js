// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "adarsh",
    "full name": "Adarsh Chaubey",
    age: 18,
    [mySym]: "myKey1", // to use as synbol it is necessary to put in []
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









