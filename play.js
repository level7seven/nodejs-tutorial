let name = 'John'
let age = 29
let hasHobbies = true


const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ' and age is ' + userAge + ' and has hobbies: ' + userHasHobby)
}

console.log(summarizeUser(name, age, hasHobbies))


//Types of arrow function calls

const add = (a, b) => { return a + b }
const addOne = a => a + 2;
const addRandom = () => 1 + 2


console.log(add(1, 2))
console.log(addOne(1))
console.log(addRandom())