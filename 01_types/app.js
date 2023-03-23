var input1 = document.getElementById('num1');
var input2 = document.getElementById('num1');
var button = document.getElementById("btn");
console.log("Hello World");
var add = function (val1, val2) {
    return val1 + val2;
};
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var firstVal = input1.value;
    var secondVal = input2.value;
    console.log("result:");
    console.log(add(+firstVal, +secondVal));
});
// Basic Types:
// 1. String: string
// 2. Number: number
// 3. Boolean: boolean
var person;
person = "Huzaifa";
console.log(person);
var arr = ["Apple", "Orange"];
// arr.push(2)  => not allowed
arr.push("PineApple");
var arr2 = [1, 2, 3, 4];
arr2.push(5);
