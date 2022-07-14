let userInput: unknown; // new type in TS, different than any, TS check for error
let userName: string;

userInput = 5; // now it is number
userInput = 'Max';
// userName = userInput; // !! Error

if (typeof userInput == 'string'){
  userName = userInput; // no ERROR
}