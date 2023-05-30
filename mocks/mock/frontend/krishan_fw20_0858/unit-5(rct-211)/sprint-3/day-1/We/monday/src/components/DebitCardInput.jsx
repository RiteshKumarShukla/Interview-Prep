import React from 'react'
import { forwardRef } from 'react'

const DebitCardInput = forwardRef(({perInputBox,onChangeHandler,backSpaceHandler,correctPassword},ref) => {
    const handleKeyUp = (e)=>{
        if(e.keyCode === 8){
            backSpaceHandler(e)
        }
        else{
            onChangeHandler(e)
        }
    }
  return (<input ref={ref}
     onKeyUp = {handleKeyUp}
     maxLength={perInputBox}
     className={correctPassword ? 'fillPassword': undefined} />)
})

export default DebitCardInput;