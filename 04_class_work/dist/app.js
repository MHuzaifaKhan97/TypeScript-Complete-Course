"use strict";
// Getter Setter
class Product {
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get id() {
        return this._id;
    }
    set name(newName) {
        if (!newName) {
            throw new Error("Name can not be empty");
        }
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
}
// const product1 = new Product(1,"Cup",100);
// console.log(product1.getName());
// console.log(product1.name);
// product1.name = "Cup Set";
// console.log(product1.name);
// Inheritence
class ClothingProduct extends Product {
    constructor(id, name, price, _color, _size) {
        super(id, name, price); // calling parent constructor
        this._color = _color;
        this._size = _size;
    }
    getDiscountRates() {
        return this.price * 0.9;
    }
}
const clothingProduct = new ClothingProduct(2, "T-Shirt", 500, "Blue", "M");
console.log(clothingProduct);
class ElectronicsProduct extends Product {
    constructor(id, name, price, _brand, _model) {
        super(id, name, price); // calling parent constructor
        this._brand = _brand;
        this._model = _model;
    }
    getDiscountRates() {
        return this.price * 0.95;
    }
}
// class Cart {
//    private _products: Product[] = [];
//    constructor(){}
//    get totalPrice(){
//     return 0
//    }
// }
// Abstract Methods
// abstract method ka object nahi banta
// Singletons
class Utils {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Utils();
        }
        return this.instance;
    }
}
// const utils = new Utils();
// const utils2 = new Utils();
const utils = Utils.getInstance();
console.log(utils);
//# sourceMappingURL=app.js.map