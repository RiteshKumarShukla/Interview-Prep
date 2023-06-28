function btn(){
       let data=false;
      
      if(document.getElementById('pin').value==="1234"){
          data= true;
          }
  
      let myPromise= new Promise(function(resolve,reject){
    
      setTimeout(function  (){   
        
      if(data){
          resolve("pass")
      }
      else{
          reject("fail")
      }
      },3000)
      
  })
  
  myPromise.then(function(res){
      window.location.href="success.html"
  })
  
  myPromise.catch(function(rej){
      window.location.href="reject.html"
  })
  }
  