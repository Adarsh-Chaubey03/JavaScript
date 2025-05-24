/*  Javascript Execution Context

- global execution context 
- functional executional context
- eval execution context


{}  => memory *creation phase*
    => execution phase
*/

let val1 = 12
let val2 = 23
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(121, 211)


/*
1) global execution -> this

2) memory phase   => val1 -> undefined
                     val2 -> undefined
                     addNum -> definition
                     result1-> undefined
                     result2-> undefined

3)Execution Phase

   12 -> val1
   23 -> val2
    
   addNum -> new variable environment + execution thread

          memory phase 
             val1  -> undefined
             val2  -> undefined
             total -> undefined

         execution phase
             num1  = 12
             num2  = 23
             total = 35

    delete and return back to 1
    
 //LIFO

 
*/
