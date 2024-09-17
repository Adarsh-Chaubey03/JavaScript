 let a = 10
 const b = 20
 var c = 30

 console.log(a); // 10
 console.log(b); // 20
 console.log(c); // 30

 let a11 = 1076


 if(true){
    let a1 = 10
    let a11 = 100
    const b1 = 20
    var c1 = 30
    d=43
    console.log("inner",a11) // inner 100
}
// console.log(a1); // a1 is not defined
// console.log(b1); // 1 is not defined
console.log(c1); // 30   : no block scope
console.log(d);  // 43   : no block scope
 
console.log("global",a11)    // global 1076