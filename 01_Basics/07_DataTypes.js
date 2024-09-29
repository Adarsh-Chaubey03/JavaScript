/* primitive data type

    1. String
    2. Boolean
    3. Number
    4. null
    5. Undefined
    6. Symbol
    7. BigInt

*/

const score = 230

const scoreValue = 230.88

const isLoogged = false

const temp = null

let userEmail;


const id = Symbol('123')
const otherId = Symbol('123')

console.log(id==isLoogged); // false   : symbol creates unique data type everytime


/* Reference or non primitive data type-------------------------------------------------
    
    1. Array
    2. Object
    3. Function

 */

const heros = ["Virat Kohli","Neeraja Bhanot"];   // array

let myObj = {                                     // object
    name: "Adarsh",
    age: 23
}

console.log(typeof myObj)           // object



const myFunction = function(){
    console.log("Be Grateful")
}

console.log(typeof myFunction);  //function (object function)
