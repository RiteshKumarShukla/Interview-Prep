class Animal {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof!");
    }
}

// Create instances of Dog
const myDog = new Dog("Max", "Poodle");
myDog.sayName(); // Output: My name is Max
myDog.bark(); // Output: Woof!
