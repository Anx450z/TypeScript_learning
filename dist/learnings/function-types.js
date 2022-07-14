"use strict";
let userInput; // new type in TS, different than any, TS check for error
let userName;
userInput = 5; // now it is number
userInput = 'Max';
// userName = userInput; // !! Error
if (typeof userInput == 'string') {
    userName = userInput; // no ERROR
}
function generateError(message, code) {
    // hash in JS or Object type
    throw {
        message: message,
        code: code
    };
}
generateError("This is my custom error!", 500);
//# sourceMappingURL=function-types.js.map