//TypeScript 1


type name =string;

type age = number;

type isFetching = boolean;

const arrOfNumbers : number[] = [2,3,4,5,6];

const arrOfStrings : Array<string> = ['Ram','Sita','Laxman','Hanuman'];

const tupleExample :[string, boolean]= ['Ram',true];

enum EnumExample {
    User,
    SuperUser,
    Admin,
    SuperAdmin
}

const AddFunction = (x:number,y:number):number=>{
    return x*y
};

const divideFunction = (x:number,y:number):number=>{
    return x/y
};

const printFunction = (name:string):void=>{
    console.log(name)
}



