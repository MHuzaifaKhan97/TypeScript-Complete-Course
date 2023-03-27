// Class 

class Student {
     name: string;
    rollNum: number;
    constructor(n: string,rn:number){
        this.name = n;
        this.rollNum = rn;
    }
}

const student1 = new Student("Muhammad Huzaifa Khan",1234);
console.log(student1);

