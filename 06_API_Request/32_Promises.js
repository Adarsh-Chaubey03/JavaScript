/* promise object - represents completion or failure

   three states of promise object
    1. pending
    2. fulfilled 
    3. rejected

   */
// Promise-1
const promiseOne = new Promise(function (resolve, reject) {
    // do an async task 
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('async task is complete');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("Promise Consumed");

})

//Promise-2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('async 2 resolved');
})

//Promis-3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "ahvsgvdag@gshda.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

//Promise-4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "chai", email: "ahvsgvdag@gshda.com" })
        } else {
            reject('Error: Something Went Wrong')
        }
    }, 1000)
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log(error);

    })
    .finally(()=> console.log("the promise is either resolved or rejected"))


    // Promise-5

    const promiseFive = new Promise(function(resolve,reject){
            setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "chai", email: "ahvsgvdag@gshda.com" })
        } else {
            reject('Error: chai Went Wrong')
        }
    }, 1000)
    })
    
    async function consumepromiseFive(){
       try {
         const response = await promiseFive
        console.log(response)
       } catch (error) {
        console.log(error);
        
       }
    }
    consumepromiseFive()


