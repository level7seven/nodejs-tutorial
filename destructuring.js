//object
const person = {
    name: "Raf",
    age: 34,
    greet() {
        console.log("Hello " + this.name)
    }
}

const printName = ({ name, age }) => {
    console.log(name, age)
}

printName(person)

const { name, age } = person
console.log(name, age)

const hobbies = ['Sports', 'Cooking']
const [hobby1, hobby2] = hobbies

console.log(hobby1, hobby2)