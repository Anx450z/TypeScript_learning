var userInput; // new type in TS, different than any, TS check for error
var userName;
userInput = 5; // now it is number
userInput = 'Max';
// userName = userInput; // !! Error
if (typeof userInput == 'string') {
    userName = userInput; // no ERROR
}
