let userInput: unknown; // new type in TS, different than any, TS check for error
let userName: string;

userInput = 5; // now it is number
userInput = 'Max';
// userName = userInput; // !! Error

if (typeof userInput == 'string'){
  userName = userInput; // no ERROR
}

function generateError(message: string, code: number): never {// this function return never, this crashes the script
  // hash in JS or Object type
  throw { 
    message: message,
    code: code
   }
}

generateError("This is my custom error!", 500);