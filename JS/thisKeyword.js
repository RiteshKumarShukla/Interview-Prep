// Normal Function
function greet() {
    console.log(`Hello, ${this.name}!`);
}

const person = {
    name: 'Alice',
    greet: greet
};

person.greet(); // Output: Hello, Alice!




// Arrow Function
const person = {
    name: 'Alice',
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

person.greet(); // Output: Hello, Alice!
