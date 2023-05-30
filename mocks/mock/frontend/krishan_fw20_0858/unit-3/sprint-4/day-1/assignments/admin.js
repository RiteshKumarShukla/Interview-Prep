let ourdata=JSON.parse(localStorage.getItem('showname'));

display(ourdata)

// post method

async function addpost(){

    let id=document.getElementById('id').value;

    let title=document.getElementById('title').value;

    let author=document.getElementById('author').value;

    let send_data={
        id:id,
        title:title,
        author:author
    }


    // or we can write this is this way(when key and value are same)
    // let send_data={
     //   id,
     //   title,
     //   author
   // }


    let res=await fetch(`http://localhost:3000/posts`,{

        method:'POST',

        body:JSON.stringify(send_data),
        
        headers:{

            'Content-Type':'application/json',

        },
        
    });

    let data=await res.json();
    console.log(data);

}

//delete method

async function deletepost(){
    let id=document.getElementById('delid').value;

    let res= await fetch(`http://localhost:3000/posts/${id}`,{
        method:'DELETE',

        headers:{

            'Content-Type':'application/json',

        },
    });

    let data=await res.json();
    console.log(data);
}

//patch request

const updatepost= async()=>{
    let id=document.getElementById('update').value;

    let title=document.getElementById('update_title').value;

    let send_data={
        title,
    }


    let res=await fetch(`http://localhost:3000/posts/${id}`,{

        method:'PATCH',

        body:JSON.stringify(send_data) ,

        headers:{
            'Content-Type':'application/json',
        }
        
    })

    let data=await res.json();
    console.log(data);
}


//put request


let replacepost= async() => {
    let id=document.getElementById('replace_id').value;

    let title=document.getElementById('replace_title').value;

    let send_data={
        title,
    }


    let res=await fetch(`http://localhost:3000/posts/${id}`,{

        method:'PUT',

        body:JSON.stringify(send_data) ,

        headers:{
            'Content-Type':'application/json',
        }
        
    })

    let data=await res.json();
    console.log(data);
}





function display(data) {
    document.getElementById('showname').innerText=null;

    document.getElementById('showname').innerText=`Hello ${data.name}`;


}