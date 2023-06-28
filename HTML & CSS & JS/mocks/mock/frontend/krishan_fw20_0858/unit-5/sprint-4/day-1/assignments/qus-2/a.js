//problem 1
const problem2Qus = (args) => {
    if (args.lastName !== undefined) {
        console.log(args.firstName + args.lastName);
    }
    else {
        console.log(args.firstName);
    }
};
//problem5
// type PhoneBook ={
// }
let arrayOfObjects = [{ phone: [1, 3, 5,], addresses: ['r', 'a', 'm'],
        firstName: 'krishan', lastName: 'kumar' }];
const phoneBook = (args) => {
    arrayOfObjects.push(args.firstName = 'ram', args.lastName = 'sita', args.phone = [1, 3, 6], args.addresses = ['ram', 'sita', 'laxman']);
};
console.log(arrayOfObjects);
