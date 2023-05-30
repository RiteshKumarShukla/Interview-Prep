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
