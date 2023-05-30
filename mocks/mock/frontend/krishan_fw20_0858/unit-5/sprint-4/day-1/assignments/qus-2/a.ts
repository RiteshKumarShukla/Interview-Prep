//problem 1

type problem1 = {
    title:string;
    status:boolean;
    id:number;
}

//problem 2

type problem2 = {
    firstName : string;
    lastName?:string;
}

const problem2Qus = (args:problem2)=>{
    if(args.lastName!==undefined){
        console.log(args.firstName+args.lastName)
    }
    else{
        console.log(args.firstName)
    }
}

//problem3

type address = {
    houseNo:number;
    street:string | number;
    city:string;
    state:string;
    postalCode:number;
    country:string;
}
//problem 4

type PersonDetails = {
    prefix?:string;
    phone:Array<number>;
    addresses : string[];
    email?:string;
    firstName:string;
    lastName:string;
    middleName?:string;
}

//problem5

// type PhoneBook ={

// }
let arrayOfObjects : Array<PersonDetails>=[{phone:[1,3,5,],addresses:['r','a','m']
,firstName:'krishan',lastName:'kumar'}]

const phoneBook = (args:PersonDetails)=>{
    arrayOfObjects.push(args.firstName='ram',args.lastName='sita',args.phone=[1,3,6],args.addresses=['ram','sita','laxman'],)

}
console.log(arrayOfObjects)