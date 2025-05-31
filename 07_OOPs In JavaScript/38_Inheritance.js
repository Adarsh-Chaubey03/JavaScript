class user {
    constructor(username) {
        this.username = username;
    
    }
    logMe() {
        console.log(`username is ${this.username}`)
    }

}

class Teacher extends user {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }
}

const chai = new Teacher("chai","vghdash@gmail.com","123")
console.log(chai);
