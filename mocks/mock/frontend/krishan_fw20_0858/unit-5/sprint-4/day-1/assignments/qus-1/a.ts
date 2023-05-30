//typename with string 
const stringValue : string = 'Krishan';

// typename with age
const ageValue : number = 22;

//boolean value
const booleanValue : boolean = true;

//array of numbers
const arrayOfNumbers : Array<number> = [1,2,3,4,5];

//array of string
const arrayOfString : Array<string> = ['ram','laxman','sita'];

//tuple with first value as string and second as boolean
const tuple : [string,boolean ] = ['ram',true];

//enum
enum userData {
    user,
    superUser,
    Admin,
    superAdmin
}

//function that gives product of two numbers
const productOfNumbers = (a:number,b:number):number => a*b;

//function that divides two numbers
const divisionOfNumbers = (a:number, b:number):number => a/b;

//function that takes a name and print without returning anything

const printName = (a:string):void => console.log(a);

