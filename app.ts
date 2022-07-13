// explicitly assigned types, these assignments will be stripped on compilation
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Ankur",
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role : [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ["Cricket"];

person.role.push('admin'); // this is an exception, TS cannot catch this error
// person.role =[0, 'admin', 'user'];  // !!! ERROR

console.log(person.name);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !
}