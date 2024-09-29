// Immediately Invoked Function Expressions (IIFE)

(function chai(){  // named IIFE
    console.log(`db connected`);  
})();  // db connected

/*
- prevents from pollution of global scope
-syntax: (function definition)(execution call);   .......... as usual
-         ;     => necessary to end the IIFE
*/

((name) => {         //unnamed IIFE
    console.log(`db connected ${name}`);  
})('adarsh')   //db connected adarsh
