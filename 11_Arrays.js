/*---------------------------------------  ARRAY ------------------------------------------

 # resizable
 # different data type
 # non associative 

 */

 const arr = [32,1,22,3,43,5] // 0-based indexing
 const heros = [ "virat","kohli"]
 const myArr = new Array(1,2,33,2)
 console.log(arr[2]) //22

 // Array methods
 
 myArr.push(6)       // add element at last
 console.log(myArr)  // [1, 2, 33, 2, 6]

 myArr.pop()          // remove last element
 console.log(myArr)   // [1, 2, 33, 2]

 myArr.unshift(9)     // add in begining - poor optimisation
 console.log(myArr)   // [9, 1, 2, 33, 2]
 
 myArr.shift()        // remove first element
 console.log(myArr)   //[1, 2, 33, 2]

 console.log(myArr.includes(231)); // false
 console.log(myArr.indexOf(12));   // -1 => does not exist
 console.log(myArr.indexOf(2))     // 1

 const newArr = myArr.join();

 console.log(myArr);            // [1, 2, 33, 2]
 console.log(newArr);           // 1,2,33,2   => string
 
 console.log("A", myArr);      //  A [1, 2, 33, 2]

 const myn1 = myArr.slice(1,3) // includes 1,2 not 3

 console.log(myn1);            //  [2, 33]

 console.log("B",myArr);       // B [1, 2, 33, 2]
 
 const myn2 = myArr.splice(1,3)  // manipulates original array
 console.log(myn2);           // [2, 33, 2]
 

 const combo = ["Virat","Adarsh"]
 const combo2= ["kohli", "name"]
 
 combo.push(combo2)
 
 console.log(combo); //['Virat', 'Adarsh', Array(2)]

 console.log(combo.concat(combo2))  //['Virat', 'Adarsh', 'kohli', 'name']

 const newArray = [...combo,...combo2]
 console.log(newArray)    // ['Virat', 'Adarsh', 'kohli', 'name']


 const otherArray =  [1,2,3,[2,4],232,[3,[3,4]],65]
 const realAnotherArray = otherArray.flat(Infinity)
 console.log(realAnotherArray)  //  [1, 2, 3, 2, 4, 232, 3, 3, 4, 65]


 console.log(Array.isArray("Adarsh"))        // false
 console.log(Array.from("Adarsh"))           // ['A', 'd', 'a', 'r', 's', 'h']
 console.log(Array.from({name: "Adarsh"}))    // []

 


 
 