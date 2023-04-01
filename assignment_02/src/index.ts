abstract class Vehicle {
   constructor(private make:string,private model:string, private year:number, private rented:boolean){}

   getMake(): string{
      return this.make;
   }
   getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    getRented(): boolean {
      return this.rented;
    }
    setRented(rented: boolean){
      this.rented = rented;
    }
    abstract rentalRate(): number;

    rent(): void {
      if (this.rented) {
        console.log(`${this.make} ${this.model} is already rented.`);
      } else {
        this.rented = true;
        console.log(`${this.make} ${this.model} has been successfully rented.`);
      }
    }
  
    returnVehicle(): void {
      if (this.rented) {
        this.rented = false;
        console.log(`You returning this ${this.make} ${this.model}.`);
      } else {
        console.log(`${this.make} ${this.model} has not been rented till now.`);
      }
    }
}

class Motorcycle extends Vehicle {
   private engineSize: number;
 
   constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
     super(make, model, year, rented);
     this.engineSize = engineSize;
   }
 
   rentalRate(): number {
     return 50;
   }
 
   getEngineSize(): number {
     return this.engineSize;
   }
 }
 
class Car extends Vehicle {
   private noOfSeats: number;
 
   constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, numSeats: number) {
     super(make, model, year, rented);
     this.noOfSeats = numSeats;
   }
 
   rentalRate(): number {
     return 100;
   }

   getNumOfSeats(): number {
     return this.noOfSeats;
   }
 }
 
 class Truck extends Vehicle {
   private weightCarry: number;
   private noOfWheels: number;
 
   constructor(make: string, model: string, year: number, rented: boolean, weightCarry: number,noOfWheels:number) {
     super(make, model, year, rented);
     this.weightCarry = weightCarry;
     this.noOfWheels = noOfWheels;
   }
 
   rentalRate(): number {
     return 150;
   }
 
   getWeightCarry(): number {
     return this.weightCarry;
   }
   geNoOfWheels(): number {
      return this.noOfWheels;
    }
 }
 
 const motorcycle1 = new Motorcycle("Suzuki","GR-150",2022,false,150)
 motorcycle1.rent();
 console.log(`The rent price for this bike is ${motorcycle1.rentalRate()}`);
 motorcycle1.returnVehicle();


 const car1 = new Car('Toyota', 'Corolla', 2023, false, 4, 5);
 car1.rent();
 console.log(`The rental rate for this car is ${car1.rentalRate()}`);
 car1.returnVehicle(); 
 
 const truck1 = new Truck('Hundai', 'Shehzor', 2020, true, 1000,8);
 truck1.rent(); 
 console.log(`The rental rate for this truck is ${truck1.rentalRate()}`);
 truck1.returnVehicle(); 
 
 
 
 
 
 
 