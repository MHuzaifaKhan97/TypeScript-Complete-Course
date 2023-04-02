"use strict";
// Decorators
// decorators are normally functions
// always used with classes
// first letter must be capital of decorator function
// can be used with multiple class 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(message) {
    return function (constructor) {
        console.log("LOGGING...");
        console.log(message);
    };
    // return another function which is actual function
}
function FillHTML(template, elementId) {
    return function (constructor) {
        // console.log(constructor);
        const elem = document.getElementById(elementId);
        const p = new constructor(); // creating instance of Person class
        if (elem) {
            elem.innerHTML = template;
            // elem.innerHTML = p.name;
            elem.querySelector("h1").innerHTML = p.name;
        }
    };
    // return another function which is actual function
}
// goto tsconfig.json and set experimentalDecorators to true
let Person = class Person {
    constructor() {
        this.name = "Huzaifa";
    }
};
Person = __decorate([
    Logger("Calling from person"),
    FillHTML("<h1>Hello World</h1>", "app")
], Person);
const per = new Person();
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw Error("Types did not match");
    }
}
const value = add("Hello", "World");
const value2 = add(5, 4);
value2.toFixed();
console.log(value.split(" "));
//# sourceMappingURL=app.js.map