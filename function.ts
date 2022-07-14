function add(n1: number, n2: number): number { //explicitly define return type
  return n1 + n2;
}

function printResult(num: number): void { // void return type as nothing is getting returned by default
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){ // cb takes a function
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b:number) => number; //function types

combineValues = add; // works 
// combineValues = printResult; // !!! Error, does not match function type


console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => { // we don't need to assign type of result here, it is done above
  console.log(result);// result will be of number type
  return result; // we can return value here, but will not be used inside addAndHandle function as return type is void
})