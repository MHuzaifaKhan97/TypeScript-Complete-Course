"use strict";
// Type Casting
// const input = document.getElementById("input1") as HTMLInputElement;
// or 
// const input = <HTMLInputElement>document.getElementById("input1");
// Generics
// function promise () : Promise<string> {
//   return new Promise((resolve,reject) => {
//       setTimeout(()=> {
//          resolve("Task performed successfully");
//       },2000)
//    }); 
// }
// promise().then((data) => {
//    const array= data.split(" ");
//    console.log(array);
// })
// type User  = {
//    name: string,
//    id: number,
// }
// function promise () : Promise<User> {
//    return new Promise((resolve,reject) => {
//        setTimeout(()=> {
//           resolve({
//             name:"Huzaifa Khan",
//             id:1234
//           });
//        },2000)
//     }); 
//  }
//  promise().then((data) => {
//     console.log(data.name);
//  })
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
// const merged = merge({"name":"Huzaifa"},{id:1234}) 
// the problem using <T,U> is k koi bh value ko wo allow kardega e.g:
const merged = merge({ "name": "Huzaifa" }, 1234);
//  to avoid this 
console.log(merge.name);
//# sourceMappingURL=app.js.map