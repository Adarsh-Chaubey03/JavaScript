// stack - primitive  & heap - non primitive

let myYtName = "Adarsh Chaubey"
let anotherName = myYtName  // copy
anotherName="Virat Kohli"

console.log(anotherName) // Virat Kohli
console.log(myYtName)    // Adarsh Chaubey

let userOne = {
    email: "user@google.com",
    upiId: "mne34@ybk"
}

let userTwo = userOne       // not a copy

userTwo.email = "alpha@google.com"

console.log(userOne.email)   // alpha@google.com

console.log(userTwo.email)   // alpha@google.com