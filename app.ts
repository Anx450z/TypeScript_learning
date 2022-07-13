function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text' // using literal type
  ){ //union types using | symbol
  let result;
  if (typeof input1 === 'number' && typeof input2 == 'number' || resultConversion == 'as-number'){
    result = +input1 + +input2; //converted into number
  }
  else{
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === 'as-number'){
  //   return +result;
  // }
  // else{
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combineNames = combine('30', ' 26', 'as-text');
console.log(combineNames);

const combineStringNames = combine('Ankur', ' Singh', 'as-number');
console.log(combineStringNames);

// const combineEmojiNames = combine('Ankur', ' Singh', 'as-emoji'); // !! ERROR
// console.log(combineEmojiNames);