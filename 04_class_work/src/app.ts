// Getter Setter
abstract class Product {
   constructor(private _id: number, private _name: string, private _price: number){

   }

  get id(): number{
      return this._id;
   }

   set name (newName: string){
      if(!newName ){
         throw new Error("Name can not be empty");
      }
      this._name = newName;
   } 

  get name(): string{
      return this._name;
   }

  get price(): number{
      return this._price;
   }

   abstract getDiscountRates(): number;
}

// const product1 = new Product(1,"Cup",100);
// console.log(product1.getName());
// console.log(product1.name);
// product1.name = "Cup Set";
// console.log(product1.name);


// Inheritence

class ClothingProduct extends Product{
  
   constructor(
      id: number,
      name: string,
      price: number,
      private _color:string, 
      private _size: "S" | "M" | "L" | "XL"){
      super(id,name,price); // calling parent constructor
   }

   getDiscountRates(): number {
     return this.price * 0.9;
   }
}

const clothingProduct = new ClothingProduct(2,"T-Shirt",500,"Blue","M");
console.log(clothingProduct);

class ElectronicsProduct extends Product{
  
   constructor(
      id: number,
      name: string,
      price: number,
      private _brand:string, 
      private _model:string){
      super(id,name,price); // calling parent constructor
   }
   getDiscountRates(): number {
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
   private static instance: Utils;
   private constructor(){}

   static getInstance(){
      if(!this.instance){
      this.instance = new Utils();
      }
      return this.instance;
   }
}
// const utils = new Utils();
// const utils2 = new Utils();

const utils = Utils.getInstance();
console.log(utils);