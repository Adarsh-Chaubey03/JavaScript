/*  for loop-

for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}

*/

for (let index = 0; index <= 10; index++) {
    console.log(index)
}
// 0 to 10


for (let i = 0; i <= 10; i++) {
    5
    //    console.log(`outer loop no. ${i}`);
    for (let j = 0; j <= 10; j++) {
        //        console.log(`inner loop no. ${j}`)

    }
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
/*

flash
batman
superman

*/

// break and continue
for (let index = 1; index < 21; index++) {
    if (index ==5) {
        console.log(`detected 5`);
        break      // loop ends
    }
    console.log(index)
}

/*
1
2
3
4
detected 5
*/

for (let index = 1; index < 8; index++) {
    if (index ==5) {
        console.log(`detected 5`);
        continue    // skips the condition
    }
    console.log(index)
}

/*
1
2
3
4
detected 5
6
7
*/