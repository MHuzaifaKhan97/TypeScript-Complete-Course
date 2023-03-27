// Class 

// class Student {
//      name: string;
//     rollNum: number;
//     constructor(n: string,rn:number){
//         this.name = n;
//         this.rollNum = rn;
//     }
// }

// Shorthand way

class Student {
   private skills: string[] = [];
   constructor(public name: string, public readonly rollNum:number){  
   }
   addSkill(skill:string){
    this.skills.push(skill);
   }
   getSkills(){
    return this.skills;
   }
}

const student1 = new Student("Muhammad Huzaifa Khan",1234);

// student1.rollNum = 123 // not allow because of readonly


// student1.skills.push("Flutter");  // not allowed when make array private
// student1.skills.push("NodeJS");
student1.addSkill("JavaScript");
student1.addSkill("Flutter");
student1.addSkill("NodeJS");
console.log(student1);
console.log(student1.getSkills());

// Access Modifiers
// public (by default)
// private

// readonly => only allow to get data, not write or change the data.