let userdata = JSON.parse(localStorage.getItem("student_sign")) || [];
let adminsign = JSON.parse(localStorage.getItem("admin_sign")) || [];

class User {

  constructor() {
    this.org = "masai";
    //username and password being added here from line 45 and 46
  }

  validateusername(username) {
    let value = username.includes("@") ? false : true;

    return value;
  }

  validatepassword(password) {
    let value = password.includes("123") ? false : true;

    return value;
  }

  //Student Login function

  Login(username, password) {

    let val=false;
    userdata.forEach((el)=>{
      if (el.username === username && el.password === password){
        return val= true;
      }
    })
   
      if (val) {
        alert("login successful");
        window.location.href="student.html";

      }
       else {
        alert("authentication failed");
      }
   
  }

  //Student signup function

  signup(username, password) {

    //we need to validate what usertype

    let isvalidated = false;

    isvalidated = this.validateusername(username) && this.validatepassword(password);
    //we need to check two things: 1. username 2. password

    if (isvalidated) {
      this.username = username;
      this.password = password;
      userdata.push(this);
      localStorage.setItem("student_sign", JSON.stringify(userdata));
      //storedata & show success msg

      alert("user registered successfully");

    } else {
      alert("please enter correct details");
    }
  }
}





// Creating student class

class Student extends User {
  constructor() {
    super();
    
  }


}



//Admin class for admin 
class Admin extends User {

  constructor() {
    super();
  }

  // for admin login

  adminlogin(username, password) {
let val=false;
adminsign.forEach((ele)=>{
  if (ele.username === username && ele.password === password){
    return val=true;
  }
})
    

      if (val) {
        alert("admin login successful");
 
       window.location.href="Admin.html"
      }
      else {
        alert("oh admin kal aana");
      }
   
  }

  // for admin signup 


  adminsign(username, password) {
    let isvalidated = false;

    isvalidated =
      this.validateusername(username) && this.validatepassword(password);
    //we need to check two things: 1. username 2. password

    if (isvalidated) {
      this.username = username;
      this.password = password;

      adminsign.push(this);
      localStorage.setItem("admin_sign", JSON.stringify(adminsign));
      //storedata & show success msg

      alert("user registered successfully");
    }
    else {
      alert("please enter correct details");
    }
  }
 
}



function Signup() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let s1 = new User();
  s1.signup(username, password);

  
}

function userlogin() {
  let username = document.getElementById("user_name").value;
  let password = document.getElementById("pass_word").value;

  let s1 = new Student();
  s1.Login(username, password);

}

//for admin login and signup
function adminSignup() {
  let username = document.getElementById("Admin_sign_name").value;
  let password = document.getElementById("Admin_sign_pass").value;

  let s1 = new Admin();
  s1.adminsign(username, password);


}

function adminlogin() {
  let username = document.getElementById("Admin_login_name").value;
  let password = document.getElementById("Admin_login_pass").value;

  let s1 = new Admin();
  s1.adminlogin(username, password)

}
