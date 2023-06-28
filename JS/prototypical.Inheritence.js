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


// In the example above, we have a base class Animal with a constructor and a method sayName(). The Dog class extends the Animal class using the extends keyword. It also has its own constructor and a method bark().

// The super() method is used in the Dog class constructor to call the parent class constructor and pass the name parameter. This ensures that the name property is correctly set for the Dog instance.

// By using prototypal inheritance, the Dog class inherits the sayName() method from the Animal class. The bark() method is specific to the Dog class.

// This ES6 syntax provides a cleaner and more intuitive way to achieve prototypal inheritance compared to the older ES5 syntax using prototypes and constructor functions.