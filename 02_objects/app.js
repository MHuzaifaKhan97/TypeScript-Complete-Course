// Objects 
var person = {
    name: "Huzaifa",
    rollNo: 1234,
    hobbies: ["Games", "Photography"],
    email: "",
};
person.email = "huzaifa@gmail.com";
var persons = [];
persons.push(person, {
    name: "Waleed Khan", rollNo: 123, hobbies: ["Cricket"]
});
console.log(persons);
// complete function signature with return type
// void when nothing is return 
var add = function (val1, val2, callBack) {
    callBack("Hello World");
    return val1 + val2;
};
var add2 = function () { };
// let func: Function;
var func;
// func = add; // not allow because parameter not matched
func = add; // allow
var addition = function (val1, val2, calc) {
    if (calc === "add") {
        return val1 + val2;
    }
    else if (calc === "sub") {
        return val1 - val2;
    }
};
console.log(addition(10, 5, "add"));
