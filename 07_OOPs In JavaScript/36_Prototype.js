let myName = "adarsh     "

console.log(myName.trim().length) // 6

String.prototype.truelength = function(){
    console.log(`${this.name}`)
    console.log(`true length is : ${this.trim().length}`);
    
}

myName.truelength()









let myHera = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "siling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.adarsh = function(){
    console.log("adarsh is present in all object");
}

heroPower.adarsh()

//PROTOTYPAL INHERITANCE

const user = {
    name: "chai",
    email:"ghdcgvs@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: false 
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__:TeachingSupport  // linking
}

// Teacher.__proto__= user
// Modern Approach

Object.setPrototypeOf(TeachingSupport,Teacher)