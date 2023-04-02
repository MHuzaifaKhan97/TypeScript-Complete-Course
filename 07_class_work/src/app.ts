// Decorators
// decorators are normally functions
// always used with classes
// first letter must be capital of decorator function
// can be used with multiple class 

function Logger(message: string){ // decorator factory
   return function (constructor: Function){
   console.log("LOGGING...");
   console.log(message);
   }
   // return another function which is actual function
}

function FillHTML(template: string,elementId: string){ // decorator factory
   return function (constructor: any){
      // console.log(constructor);

      const elem = document.getElementById(elementId);
      const p = new constructor(); // creating instance of Person class
      if(elem){
         elem.innerHTML = template;
         // elem.innerHTML = p.name;
         elem.querySelector("h1")!.innerHTML = p.name;
      }
   }
   // return another function which is actual function
}
// goto tsconfig.json and set experimentalDecorators to true
@Logger("Calling from person")
@FillHTML("<h1>Hello World</h1>","app")
class Person{
   name = "Huzaifa";
   constructor(){
   }
}

const per = new Person();

// Decorator has 5 types
// 1. used with class 
// 2. used with class's properties
// 3. used with class's method
// 4. used with class method's argument
// 5. used with access modifiers

// ref: https://www.typescriptlang.org/docs/handbook/decorators.html


// Function overloading

type Combined = string | number

function add(x:number,y:number): number; // Number implmentation
function add(x:string,y:string): string; // String implementation
function add(x:Combined, y:Combined){
   if(typeof x  === "number" && typeof y === "number"){
      return x+y;
   }
   else if(typeof x  === "string" && typeof y === "string"){
      return x+y;
   }else{
      throw Error("Types did not match")
   }
}

const value = add("Hello","World");
const value2 = add(5,4);
value2.toFixed()
console.log(value.split(" "))