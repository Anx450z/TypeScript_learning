function add(n1, n2, showResult, phrase) {
    if (showResult) {
        var result = n1 + n2;
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0
var number2 = 15.6;
var printResult = true;
var resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
