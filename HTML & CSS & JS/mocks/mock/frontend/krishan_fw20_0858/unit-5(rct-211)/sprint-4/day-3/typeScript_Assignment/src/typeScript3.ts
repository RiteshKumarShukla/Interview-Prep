interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: 'Admin';
    name: string;
    age: number;
    role: string;
}

const getType = (args:User)=>{
    console.log(args.type)
}

class userType {
    type: string;
  
    constructor(type:string){
        this.type = type;
    }
}

class User extends userType{
    occupation:string;
    name:string;
    age:number;
    constructor(occupation:string,name:string,age:number){
        super('User')
        this.age= age;
        this.name = name
        this.occupation = occupation;
    }
    getType():string{
        return this.type
    }
}

class Admin extends userType{
    role:string;
    name:string;
    age:number;
    constructor(role:string,name:string,age:number){
        super('Admin')
        this.age= age;
        this.name = name
        this.role = role;
    }
    getType():string{
        return this.type
    }
}

let u1 = new User('sde','krishan',22);
console.log(u1.getType());