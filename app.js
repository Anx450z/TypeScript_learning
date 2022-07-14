function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// function printResult(num: number): undefined { // undefined return type as nothing is getting returned by default
//   console.log('Result: ' + num);
//   return;
// }
printResult(add(5, 12));
var combineValues; //function types
combineValues = add; // works 
// combineValues = printResult; // !!! Error, does not match function type
console.log(combineValues(8, 8));
