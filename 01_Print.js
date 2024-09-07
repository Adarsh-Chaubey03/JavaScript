//---------------------DISPLAY OF OUTPUT IN JavaScript------------------------------------------------------------//


age = 21
let name = "Adarsh"

// syntax for print statement in JS

console.log(age)        // 21
console.log(name)       // Adarsh


// No need to put semicolon at the end of every statement unless to separate two statement in a single line

console.log(age); console.log(name)    // poor code readability
/*
21
Adarsh
*/


// alternate way to print multiple output together

console.table([age,name])

/*
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 21       │
│ 1       │ 'Adarsh' │
└─────────┴──────────┘
*/
