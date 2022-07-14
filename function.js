"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues; //function types
combineValues = add; // works 
// combineValues = printResult; // !!! Error, does not match function type
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result); // result will be of number type
    return result; // we can return value here, but will not be used inside addAndHandle function as return type is void
});
