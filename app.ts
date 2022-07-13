// explicitly assigned types, these assignments will be stripped on compilation
const person: {
  name: string;
  age: number; } = {
  name: "Ankur",
  age: 27
};

console.log(person.name);