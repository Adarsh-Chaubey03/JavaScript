// Dates - object

let myDate= new Date()

console.log(myDate.toDateString())           // Fri Sep 06 2024


let myNewDate = new Date(2023,0,22)
console.log(myNewDate.toDateString())        // Sun Jan 22 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp);                    // 1725646548819

console.log(myNewDate.getTime());            // 1674325800000as

// conert to seconds
console.log(Math.floor(myTimeStamp/1000));   // 1725646742



myDate.toLocaleString('default',{
    weekday: "long",
})