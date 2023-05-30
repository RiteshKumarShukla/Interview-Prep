import React, { useRef,useState } from 'react'
import PropTypes from 'prop-types'
import PinInput from './PinInput';


const Pin = ({length,perInputBox = 4,setPin}) => {
    const [inputlength] = useState(new Array(length).fill('w'));
    const inputRef = useRef([]);
    const [inputBoxValue] = useState(new Array(length).fill(''))
    const [verify, setVerify] = useState(false);
    
    const onChangeHandler = (e,index)=>{
        inputBoxValue[index] = e.target.value;
        if(e.target.value.length > 0 && index < length -1){ 
            inputRef.current[index+1].focus();
        }
        
        setPin(inputBoxValue.join(''));
        if(index === length -1 && inputBoxValue.join("") === 'admin'){
            setVerify(true);
        }
    }
    const backSpaceHandler =(e,index)=>{
        if(index > 0){
            inputRef.current[index-1].focus();
        }
        inputBoxValue[index] = e.target.value;
        setPin(inputBoxValue.join(''))

    }
    const handlePaste =(e)=>{
        e.preventDefault();
        const data = e.clipboardData.getData("text").split("").filter((item,index)=>index < length);
        data.forEach((item,index)=>{
            inputRef.current[index].value = item
            if(index < length){
                inputRef.current[index+1].focus()
            }
        })
        console.log(data)
    }
  return (
    <div onPaste={handlePaste}>
        {inputlength.map((_,index)=>{
         return  <PinInput 
         ref={(InputElement)=>{
            inputRef.current[index] = InputElement;
         }}
         key={index}
         correctPassword = {verify}
         onChangeHandler ={(e)=>onChangeHandler(e,index)}
         perInputBox = {perInputBox}
         backSpaceHandler = {(e)=>backSpaceHandler(e,index)}

         />
         
        })}
    </div>
  )
}

export default Pin

Pin.prototypes = {
    length:PropTypes.number.isRequired,
}
