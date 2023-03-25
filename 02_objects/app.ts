// Objects 

type Person = {
    name: string;
    rollNo: number;
    hobbies: string[];
};

let person: Person = {
    name:"Huzaifa",
    rollNo: 1234,
    hobbies:["Games","Photography"]
};

const persons: Person[] = [];
persons.push(person, {name:"Waleed Khan",rollNo:123,hobbies:["Cricket"]});
console.log(persons);