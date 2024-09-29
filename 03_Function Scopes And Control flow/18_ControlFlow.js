//----------------------  IF ELSE ------------------------------------------------

const score = 200;
if (score > 100) {
    let power = " fly "
    console.log(`user power: ${power}`);  // user power:  fly 
}
// console.log(`user power: ${power}`);     // power is not defined


const balance = 1000

if (balance > 500) console.log("test1"), console.log("result"); // not a good practice

if (balance < 500) {
    console.log("less than");
} else if (balance < 700) {
    console.log("less than 700")
} else {
    console.log("less than 1200")  // less than 1200
}


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard) {
    console.log("You are allowed to buy a course");
} //You are allowed to buy a course


// -------------------------- SWITCH---------------------------------------------

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("not found")
        break;
}                    // March

/* 

if break keyword is not used at where it is executed, it will execute all 
the remaining cases except default  case

case sensititve

*/


// --------------------------- truthy and falsy value -----------------------

const userEmail = "ad@bah.ai"
if (userEmail) {
    console.log("got user email");    //got user email
} else {
    console.log("provide your email");  // if it is empty
}

/* falsy value :
         false, 0, -0, BigInt 0n, "", null, undefined, NaN
 rest all are truthy value

 truthy value: 
         "0",'false', " ",[], {}, function(){}
 */

// ---------------- check if array and object are empty -----------------------

const userEmail1 = []

if (userEmail1.length === 0) {
    console.log("array is empty");  
}

const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}


// -------------- Nullish Coalescing Operator (??): null undefined ----------

let val1;

val1 = 5 ?? 10
console.log(val1)          // 5

val1 = null ?? 10
console.log(val1)          // 10

val1 = undefined ?? 15
console.log(val1);         // 15

val1 = null ?? 12 ?? 23
console.log(val1);         // 12

// ----------------- Ternary Operator  -----------------------------------------

// codition ? true : false

const iceTeaPrice = 100
 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");  //less than 80

