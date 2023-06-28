class Stack{
    constructor(){
        this.length=0;
        this.stack=[];
       
    }

  
    add(...el){

        console.log(el);

        el.forEach((ele)=>{
            this.stack.push(ele);
            this.length++
        })
      
        return this.stack;
       
    }

    remove(){
      let value=  this.stack.pop();
        this.length--;

        return value;
    }
}




class Queue{

    constructor(){
        this.stack=[];
        this.length=0;
    }

    enqueue(...el){
        el.forEach((ele)=>{
            this.stack.push(ele);
            this.length++;
        })

        return this.stack;
    }

    dequeue(){

        if(this.stack.length==0){
            console.log('Empty Stack');
        }
        else{
            let value=this.stack.shift();
            this.length--;
    
            return value;
        }
       
    }

    enQueueThree(e,f,g){

        this.stack.push(e,f,g);
        this.length+=3;

        return this.stack;
    }

    deQueueThree(){
        if(this.length==0){
            console.log('Empty Stack');
        }
        else if(this.length==2) {
            for(let x=0;x<2;x++){
                this.stack.shift();
                this.length--;
               
            }
            return this.stack;
            
    
        }
        else if(this.length==1) {
            for(let x=0;x<1;x++){
                this.stack.shift();
                this.length--;
               
            }
            return this.stack;
            
    
        }
        else if(this.length==3) {
            for(let x=0;x<3;x++){
                this.stack.shift();
                this.length--;
               
            }
            return this.stack;
            
    
        }
       
   
           }
}

let one = new Queue();


one.deQueueThree();

console.log(one);