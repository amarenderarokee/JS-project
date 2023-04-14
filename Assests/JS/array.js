let person = [
    {
        id: 1,
        name: 'Ram',
        age: 20,
        is_admin: false,
    },
    {
        id: 2,
        name: 'Sai',
        age: 30,
        is_admin: true,
    },
    {
        id: 3,
        name: 'John',
        age: 25,
        is_admin: false,
    },
]

const result = person.map(obj=> obj.name);
console.log(result);

const input = 'Ram'; 
const filterPersons = person.filter((person) => person.name === input);
console.log(filterPersons);

const removeFirstPerson = person.shift();
console.log(removeFirstPerson);
console.log(person);

const removeLastPerson = person.pop();
console.log(removeLastPerson);
console.log(person);

