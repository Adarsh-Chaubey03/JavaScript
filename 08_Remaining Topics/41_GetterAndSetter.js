class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;  
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }
}

const adarsh = new User("ahgvsgha@gmail.com", "123SXFGfsdfdfh")
console.log(adarsh.password)