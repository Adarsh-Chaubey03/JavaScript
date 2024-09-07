console.log(2 > 1)  // true
console.log(2 >= 1) //true
console.log(2 == 1) //true


/* comparing distinct data types -------------------------------------------------

-> prefer not do comparision b\w different data type 
-> not always return predictable result

*/

console.log("2" > 1);  // true

//----------------------------------------------------------------------------------

// ' === ' no coversion happens as it also checks for data type and compare only same data type

console.log("2"===2);  // false
