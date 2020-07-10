//object
const person = {
        name: "Raf",
        age: 34,
        greet() {
            console.log("Hello " + this.name)
        }
    }
    // object 
person.greet()
    // array
const hobbies = ['Sports', 'Books', 'Running']
    // printing array
for (let hobby of hobbies) {
    console.log(hobby)
}
// mapping array
console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
    // adding an item
hobbies.push('Programming')

console.log(hobbies)



// copy of an array
const copiedArray = hobbies.slice()
console.log(copiedArray)

const copiedArray2 = [...hobbies]
console.log(copiedArray2)
    // copy of an object
const copiedPerson = {...person }
console.log(copiedPerson)

// rest operator to solve
const toArray = (arg1, arg2, arg3) => { return [arg1, arg2, arg3] }

console.log(toArray(1, 2, 3))

// example
const toArray2 = (...args) => { return args }
console.log(toArray2(1, 2, 3, 4, 5, 6, 7))