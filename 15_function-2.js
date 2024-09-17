const user = {
    username: "alpha",
    price: "999",

    welcomemessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this) {username: 'alpha', price: '999', welcomemessage: ƒ} i.e. current context
    }

}

user.welcomemessage()   // alpha, welcome to website 
user.username = "beta"
user.welcomemessage()   // beta, welcome to website

console.log(this)       // {}

function chai(){
   // console.log(this);    => global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}
    let username = "lambda";
    console.log(this.username);  //undefined
    
}
chai()  


// ARROW FUNCION

const addThree = (n1,n2,n3) => {
    return n1+n2+n3;
}

console.log(addThree(1,2,2));  // 5

// emplicit return

const add = (n1,n2,n3) => n1+n2+n3
console.log(add(1,2,2)); // 5

// 'return' keyword is must if {} is used 
