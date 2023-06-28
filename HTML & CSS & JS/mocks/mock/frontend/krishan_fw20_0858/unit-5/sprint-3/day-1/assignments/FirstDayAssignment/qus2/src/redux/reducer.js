

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
        default :
        return initialState;
    }
}

export default reducer