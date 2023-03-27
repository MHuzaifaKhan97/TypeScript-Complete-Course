// Objects 

type Person = {
    name: string;
    rollNo: number;
    hobbies: string[];
    email?: string; // add ? to make key optional
};

let person: Person = {
    name:"Huzaifa",
    rollNo: 1234,
    hobbies:["Games","Photography"],
   email:"",
};
person.email = "huzaifa@gmail.com";

const persons: Person[] = [];
persons.push(person, {
    name:"Waleed Khan",rollNo:123,hobbies:["Cricket"]}
    );
console.log(persons);

// complete function signature with return type
// void when nothing is return 
const add = function(val1: number, val2: number, callBack: (x:string)=> void): number{
    callBack("Hello World");
    return val1 + val2;
}
const add2 = function(){}

// let func: Function;
let func : (x:number, y:number, cb: (x:string)=> void) =>  number;

// func = add; // not allow because parameter not matched
func = add; // allow

// Type Literals

type Calc = "add" | "sub";
const addition = function(val1: number, val2: number, calc: Calc){
   if(calc === "add"){
       return val1 + val2;
   }
   else if(calc === "sub"){
    return val1 - val2;
}
}
console.log(addition(10,5,"add"));

// Tuples

// Tuples is fixed length array

let gender: [string,string] = ["Male","Female"]
// gender[2] = "shakoor"; // not allowed
gender.push("Not Specified") // allowed

let admin : [number, string] = [1,"admin"]

let error: [number, string] = [404, "Not Found"]
