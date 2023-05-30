

let reg= async() =>{


    let register_data={

        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        username:document.getElementById('username').value,
        password:document.getElementById('password').value,
        mobile:document.getElementById('mobile').value,
        description:document.getElementById('description').value,

    }
//base urlhttps://masai-api-mocker.herokuapp.com

//suburl/auth/register 

    let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method:'POST',

        body:JSON.stringify(register_data),

        headers:{
            'Content-Type':'application/json'
        },
    })

    let data =await res.json();
    console.log(data);

    

}

// for login functionality

let login=async()=>{

    let login_data={
        username:document.getElementById("loginusername").value,
        password:document.getElementById("loginpassword").value,
    }

    let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
        method:'POST',

        body:JSON.stringify(login_data),

        headers:{
            'Content-Type':'application/json',
        },
    });

    let data=await res.json();

    let {token}=data;

    // let username=login_data.username;

    let {username}=login_data

    getprofile(username,token)

    console.log(data);

    window.location.href="admin.html"


}



//get the profile when login is successful

let getprofile= async(username,token)=>{

    //username

    let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{

        method:'GET',

        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    let data=await res.json();

    localStorage.setItem('showname',JSON.stringify(data))

    console.log(data);


}