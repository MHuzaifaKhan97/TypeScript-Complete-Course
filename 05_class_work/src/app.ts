// Define multiple types variable

// let abc: string | number = 'Hello';
// abc = 1234;

// type Animal = {
//    name: string;
//    runningSpeed: number;
// }

// type Bird = {
//    name: string;
//    flyingSpeed: number;
// }

// type Creature = Animal | Bird; // Union Types

// const tiger: Creature = {
//    name: "Tiget",
//    runningSpeed: 300 
// }

// Intersection Types

// type Creature = Animal & Bird; // Intersection Types

// const cockroach: Creature = {
//    name: "Cockroach",
//    runningSpeed: 100,
//    flyingSpeed: 50
// }

// Interface (same as type but used with classes as well)
// additional advantage of interface is k wo type k sath used hojata hai

// interface Animal {
//    name: string;
//    runningSpeed: number;
//    eat(food: string): void;
// }

// interface Bird {
//    name: string;
//    flyingSpeed: number;
// }

// interface Creature extends Animal, Bird{}

// const tiger: Animal = {
//    name: "Tiget",
//    runningSpeed: 300 
// }
// const tiger: Creature = {
//    name: "Tiget",
//    runningSpeed: 300,
//    flyingSpeed: 200
// }


// class Tiger implements Animal{

//    constructor(public name:string, public runningSpeed: number){}
 
//    eat(food: string) {
//       return "Eating food";
//    }

// }

// Type Guard
// used when we create union type

type Animal = {
   name: string;
   runningSpeed: number;
}

type Bird = {
   name: string;
   flyingSpeed: number;
}

type Creature = Animal | Bird; 

function log(creature: Creature){

   // not allowed here because flyingSpeed might be null
   // console.log(creature.flyingSpeed);

   // type guard check
   if("flyingSpeed" in creature){
      console.log(creature.flyingSpeed);
   }
}