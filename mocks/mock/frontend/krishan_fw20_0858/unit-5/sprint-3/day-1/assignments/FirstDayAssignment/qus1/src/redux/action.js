import {Inc , Dec,IncByVal,DecByVal,Mul,Div} from './actionType';

export const Increment = ()=>{
    return{
        type:Inc
    }
}

export const Decrement = ()=>{
    return{
        type:Dec
    }
}

export const IncrementByValue = (value)=>{
    return{type:IncByVal,
    payload:value
    }
}
export const DecrementByValue= (value)=>{
    
    return{type:DecByVal,
        payload:value
        }
    }

export const MultiplyByValue = (value)=>{
    return {type:Mul,
        payload:value
     }
}

export const DivideByValue =(value)=>{
    return {
        type:Div,
        payload:value
    }
}
