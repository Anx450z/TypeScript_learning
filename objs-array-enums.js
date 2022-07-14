"use strict";
// explicitly assigned types, these assignments will be stripped on compilation
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Ankur",
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role : [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 3] = "ADMIN";
    Role[Role["READ_ONLY"] = 400] = "READ_ONLY";
    Role["AUTHOR"] = "Ankur";
})(Role || (Role = {}));
; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2 by default
const person = {
    name: "Ankur",
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN // using enum
};
let favoriteActivities;
favoriteActivities = ["Cricket"];
// person.role.push('admin'); // this is an exception, TS cannot catch this error
// person.role =[0, 'admin', 'user'];  // !!! ERROR
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
