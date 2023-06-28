/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/




function add(){

    let code=document.getElementById("country").value;
    let obj={
        name:document.getElementById('name').value,
        image:document.getElementById("image").value,
        email:document.getElementById('email').value,
        country:document.getElementById("country").value
    }

   
    localStorage.setItem('user',JSON.stringify(obj))

    alert('welcome to news app')



    window.location.href="worldNews.html"


   
}