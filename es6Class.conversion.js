Animal.prototype.sayName = function () {
    console.log(`My name is ${this.name}`);
}
function Animal(name) {
    this.name = name;
}

Object.setPrototypeOf(Dog.prototype.Animal.prototype);

Dog.prototype.bark = function () {
    console.log('Woofff !!!');
}

function Dog(name, breed) {
    Animal.call(this.name);
    this.breed = breed;
}

const myDog = newDog['Max', 'Poddle'];

myDog.sayName();
myDog.bark();





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
        console.log('Woofff !!!');
    }
}

const myDog = new Dog('Max', 'Poodle');

myDog.sayName();
myDog.bark();




