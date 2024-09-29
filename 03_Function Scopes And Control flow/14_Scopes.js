let a = 10
const b = 20
var c = 30

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

let a11 = 1076


if (true) {
    let a1 = 10
    let a11 = 100
    const b1 = 20
    var c1 = 30
    d = 43
    console.log("inner", a11) // inner 100
}
// console.log(a1); // a1 is not defined
// console.log(b1); // 1 is not defined
console.log(c1); // 30   : no block scope
console.log(d);  // 43   : no block scope

console.log("global", a11)    // global 1076


// nested scope

function one() {
    const username = "Adarsh"

    function two() {
        const website = "Youtube"
        console.log(username)
    }
    //  console.log(website); => website is not defined

    two()    // Adarsh

}

one()

if (true) {
    const username = "adarsh"
    if (username === "adarsh") {
        website = " alpha.com"
        console.log(username + website)  // adarsh alpha.com
    }
    console.log(website);     //  alpha.com
}
// console.log(username)  => username is not defined

console.log(addOne(5));  //6

function addOne(num){
    return num+1
}
 
//addOne(5)

// console.log(addTwo(5));  => Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5));   //7

