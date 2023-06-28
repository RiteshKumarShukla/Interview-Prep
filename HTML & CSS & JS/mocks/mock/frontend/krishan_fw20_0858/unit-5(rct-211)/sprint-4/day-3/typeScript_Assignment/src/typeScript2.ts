interface Obj {
    title:string;
    status:boolean;
    id:number;
}
interface Names {
    firstName:string;
    lastName?:string
}
const getName = (args:Names):string=>{
return args.lastName != undefined ? `${args.firstName} ${args.lastName}`:`${args.firstName}`
}


const myName : Names ={
    firstName:'krishan',
    lastName:'kumar'
}

interface Address {
    houseNumber:number;
    street: string;
    city:string;
    state:string;
    postalCode : number;
    country:string;
}

interface PersonalDetails {
    Prefix?:string;
    phones:number[];
    addresses:Address[];
    email?:string;
    firstName:string;
    lastName:string;
    middleName?:string;
}

const phoneBook = (args:PersonalDetails):void=>{
 arrayOfObjects.push(args)
 console.log(arrayOfObjects);
}

const args =  {
    Prefix:'Sh',
    phones:[1,2,4,56,],
    addresses:[{houseNumber:23,street:'johri',city:'bahadurgarh',country:'india',postalCode:124507,state:'haryana'}],
    firstName:'krishan',
    lastName:'kumar'
}
const arrayOfObjects:PersonalDetails[] = []
phoneBook(args)

