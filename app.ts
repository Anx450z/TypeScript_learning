function add(n1: number, n2: number): number { //explicitly define return type
  return n1 + n2;
}

function printResult(num: number): void { // void return type as nothing is getting returned by default
  console.log('Result: ' + num);
}

// function printResult(num: number): undefined { // undefined return type as nothing is getting returned by default
//   console.log('Result: ' + num);
//   return;
// }
printResult(add(5, 12));