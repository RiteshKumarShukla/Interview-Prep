

class User{
    constructor(n){
        this.name=n
    }

    validateusername(username){

        // if(username.includes('#')){
        //     return false;
        // }
        // else{
        //     return true;
        // }
//we can use above method as well;
        let value=username.includes("#") ? false:true;

        return value;
    }

    validatepassword(password){
        let value=password.includes("123") ? false:true;
        return value;
    }
    signUp(username,password){
        //we need to validate user data

        let isvalidate=false;

        //to validate we are checking
    }
}

let u1=new User('krishan')

console.log(u1);