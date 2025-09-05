class Person {
    #cellphone;

    constructor(firstName, lastName, age, height, weight, cellphone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.#cellphone = cellphone;
    }
     
    sayHello() {
        console.log("Hola a todas, tengan un buen dia");
    }

    introduce() {
        return `Hola me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años.`;
    }

    getCellphone(){
        return this.#cellphone;
    }
}


let person1 = new Person("Hannah", "Rivera", 16, 1.58, 63, "987654321");

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.cellphone);

console.log("METODOS");
person1.sayHello();
console.log(person1.introduce());

console.log("ENCAPSULAMIENTO");
console.log(person1.getCellphone());

console.log("HERENCIA");

class Chef extends Person {
 constructor(
    firstName, 
    lastName, 
    age, 
    height, 
    weight, 
    cellphone,
    restaurant,
    favoriteFood
 ) {
    super
    (firstName, lastName, age, height, weight, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

 introduce() {
        return `Hola me llamo ${this.firstName} ${this.lastName} y soy chef de un restaurante ${this.restaurant}.`;
    }
} 

let chef1 = new Chef(
    "Alfredo",
    "linguini",
    18,
    1.8,
    60,
    "987654321",
    "Gusteau",
    "Lasagna"
);

console.log(chef1);
console.log(chef1.lastName);
console.log(chef1.favoriteFood);
chef1.cook();