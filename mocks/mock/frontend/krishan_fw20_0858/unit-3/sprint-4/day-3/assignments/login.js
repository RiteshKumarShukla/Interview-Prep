

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

    console.log(data);


}