"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log(`${this.make} ${this.model} is already rented.`);
        }
        else {
            this.rented = true;
            console.log(`${this.make} ${this.model} has been successfully rented.`);
        }
    }
    returnVehicle() {
        if (this.rented) {
            this.rented = false;
            console.log(`You returning this ${this.make} ${this.model}.`);
        }
        else {
            console.log(`${this.make} ${this.model} has not been rented till now.`);
        }
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 50;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, numDoors, numSeats) {
        super(make, model, year, rented);
        this.noOfSeats = numSeats;
    }
    rentalRate() {
        return 100;
    }
    getNumOfSeats() {
        return this.noOfSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, weightCarry, noOfWheels) {
        super(make, model, year, rented);
        this.weightCarry = weightCarry;
        this.noOfWheels = noOfWheels;
    }
    rentalRate() {
        return 150;
    }
    getWeightCarry() {
        return this.weightCarry;
    }
    geNoOfWheels() {
        return this.noOfWheels;
    }
}
const motorcycle1 = new Motorcycle("Suzuki", "GR-150", 2022, false, 150);
motorcycle1.rent();
console.log(`The rent price for this bike is ${motorcycle1.rentalRate()}`);
motorcycle1.returnVehicle();
const car1 = new Car('Toyota', 'Corolla', 2023, false, 4, 5);
car1.rent();
console.log(`The rental rate for this car is ${car1.rentalRate()}`);
car1.returnVehicle();
const truck1 = new Truck('Hundai', 'Shehzor', 2020, true, 1000, 8);
truck1.rent();
console.log(`The rental rate for this truck is ${truck1.rentalRate()}`);
truck1.returnVehicle();
//# sourceMappingURL=index.js.map