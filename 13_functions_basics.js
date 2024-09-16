function sayMyName(){
    console.log("h")
    console.log("hi")
    console.log("hii")
    console.log("i")
    console.log("am")
    console.log("aplha")
}

sayMyName() 

function addTwoNumbers(num1,num2){
    console.log(num1+num2)               // does not necessarily return the sum (just printing the sum)

}

addTwoNumbers(3,4)    // 7
addTwoNumbers(2,"4")  // 24
addTwoNumbers(3,"a")  // 3a
addTwoNumbers(3,null) // 3

// store in a variable

const result = addTwoNumbers(3,5)
console.log("Result: ",result);  // Result:  undefined



function addTwoNums(num1,num2){
    let sum = num1+num2
    return sum;
}

const sum = addTwoNums(3,5)
console.log("Sum: ",sum);      // Sum:  8


function loginUserMessage(userName){
    // if(userName===undefined){  or
        if(!userName){
        console.log("please enter a name");
    }
     return `${userName} just logged in`
}
console.log(loginUserMessage("Adarsh"));   //Adarsh just logged in\
console.log(loginUserMessage());           // please enter a name




