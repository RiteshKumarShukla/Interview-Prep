
function display(event){
    event.preventDefault()
    
    let arr= JSON.parse(localStorage.getItem("data")) || [];

        let pposter=document.getElementById("image").value;
        
        let prd=document.getElementById("rd").value;
                
        let pname=document.getElementById("name").value;
        
        let rat=document.getElementById("rt").value;
    
        let obj=new cf(pname,prd,pposter,rat)
    
        arr.push(obj)

        console.log(arr);
        localStorage.setItem("data",JSON.stringify(arr))

        form.reset()
        
    
}
function cf(n,r,p,rg){
    this.name=n;
    this.releasedate=r;
    this.poster=p;
    this.rating=rg;
}