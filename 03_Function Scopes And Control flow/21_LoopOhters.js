// for-of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "hello india"
for (const greet of greetings) {
    console.log(greet)
}

// map - unique and same order
const map = new Map()
map.set('IN', 'India')
console.log(map)   //  IN => India
for (const key of map) {
    console.log(key);  //['IN', 'India']
}

const myObject1 = {
    game: 'NFS',
    game2: 'NFS2'
}

// object is not iterable using for-of loop

const myObject = {
    js: 'JavaScript',
    rb: 'Ruby',
    swift: `Swift by apple`
}

// for - in loop

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`);
}

/*
js is for JavaScript
rb is for Ruby
swift is for Swift by apple
*/

// for-each loop
const coding = ["js", "node", "clusters"]
coding.forEach(function (lang) {
    console.log(lang)
})

