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
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
var person = {
    name: "Ankur",
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Cricket"];
// person.role.push('admin'); // this is an exception, TS cannot catch this error
// person.role =[0, 'admin', 'user'];  // !!! ERROR
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
