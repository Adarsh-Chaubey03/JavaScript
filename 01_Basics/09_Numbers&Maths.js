const score = 400
console.log(score)  //400

// defining specific datatype
const balance = new Number(100)
console.log(balance)  //Number (100)

//conert to string
console.log(balance.toString())  // 100
console.log(balance.toString().length) // 3 i.e all properties of string is now available

console.log(balance.toFixed(2))   // decimal places i.e. 100.00

const num = 23.2322

console.log(num.toPrecision(3))  // 23.2

const hundred = 1000000000000000
console.log(hundred.toLocaleString('en-IN'))  // 1,00,00,00,00,00,00,000


//////////////////////////////////  Maths library ////////////////////////////////////////

console.log(Math);   //Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
console.log(Math.abs(-4))                  // 4
console.log(Math.round(5.67))              // 6
console.log(Math.ceil(9.12))               // 10
console.log(Math.floor(8.9))               // 8
console.log(Math.min(1.2,44,3))            // 1.2
console.log(Math.max(4,463,236,3))         // 463
console.log(Math.random())                 // between 0 to 1

// customisable
console.log((Math.random()*10)+1)            //between 0 to 9
// (Math.random()*(max - min + 1))+min
