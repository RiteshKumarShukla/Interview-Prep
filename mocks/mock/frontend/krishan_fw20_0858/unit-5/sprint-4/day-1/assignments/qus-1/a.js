//typename with string 
const stringValue = 'Krishan';
// typename with age
const ageValue = 22;
//boolean value
const booleanValue = true;
//array of numbers
const arrayOfNumbers = [1, 2, 3, 4, 5];
//array of string
const arrayOfString = ['ram', 'laxman', 'sita'];
//tuple with first value as string and second as boolean
const tuple = ['ram', true];
//enum
var userData;
(function (userData) {
    userData[userData["user"] = 0] = "user";
    userData[userData["superUser"] = 1] = "superUser";
    userData[userData["Admin"] = 2] = "Admin";
    userData[userData["superAdmin"] = 3] = "superAdmin";
})(userData || (userData = {}));
//function that gives product of two numbers
const productOfNumbers = (a, b) => a * b;
//function that divides two numbers
const divisionOfNumbers = (a, b) => a / b;
//function that takes a name and print without returning anything
const printName = (a) => console.log(a);
