// explicitly assigned types, these assignments will be stripped on compilation
var person = {
    name: "Ankur",
    age: 27,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ["Cricket"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
}
