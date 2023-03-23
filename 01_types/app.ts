const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num1')! as HTMLInputElement;
const button = document.getElementById("btn")!;
console.log("Hello World");
const add = function(val1: number,val2: number){
    return val1 + val2;
}

button?.addEventListener("click", function(){
    const firstVal = input1.value;
    const secondVal = input2.value;
    console.log("result:")
    console.log(add(+firstVal,+secondVal))
})

// Basic Types:
// 1. String: string
// 2. Number: number
// 3. Boolean: boolean
// let person: string;
// person = "Huzaifa";
// console.log(person);
// let arr: string[] = ["Apple","Orange"];
// // arr.push(2)  => not allowed
// arr.push("PineApple")

// let arr2: number[] = [1,2,3,4];
// arr2.push(5)

// export {};