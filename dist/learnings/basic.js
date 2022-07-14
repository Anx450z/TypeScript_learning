"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5; // 5.0
const number2 = 15.6;
const printResult = true;
const resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basic.js.map