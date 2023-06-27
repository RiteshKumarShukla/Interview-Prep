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


