

const reducer =(initialState={count:0},action)=>{
    switch(action.type){
        case 'Inc':
            return{
                count:initialState.count+1
            }
        case "Dec":
            return{
                count:initialState.count-1
            }
        case 'IncByVal':
            return{
                count:initialState.count+action.payload
            }
        case 'DecByVal':
            return{
                count:initialState.count-action.payload
            }
        case 'Mul':
            return {
                count : initialState.count*action.payload
            }
        case "Div":
            if(action.payload ==0){
             alert('not possible')
            }
            else{
                return{
                    count: initialState.count/action.payload
                }
            }
        default :
        return initialState;
    }
}

export default reducer