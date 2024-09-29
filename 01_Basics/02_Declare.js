//-------------------------DECLARING A CONSTANT AND VARIABLE IN JAVASCRIPT -------------------------//
 

// Declaring Constant 

const age = 21

// age =20 => (Error - Assignment to a constant variable is unchangeable)

console.log(age)  // 21



// Declaring Variable 

let age_1 = 25
name_1 ="Adarsh"
var name = "Adarsh"  //avoided to issue in block scope

// changes to these varaiables can be made directly

name_1 = "ME"
age_1 = 20
name = "alpha"

console.table([name_1,age_1,name])

/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 'ME'    │
│ 1       │ 20      │
│ 2       │ 'alpha' │
└─────────┴─────────┘
*/
