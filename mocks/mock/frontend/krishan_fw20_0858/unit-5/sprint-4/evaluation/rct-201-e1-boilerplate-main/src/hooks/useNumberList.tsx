import { memo, useCallback } from "react";
import { measureMemory } from "vm";

const useNumberList = (initialArray: number[]) => {
  // TODO

  const list = initialArray;
  // useCallback(()=>{appendStart(),appendEnd(),popEnd(),popStart(),clear(),reset()},[initialArray])
  

  const appendStart:Function = (element:number)=>{
    list.unshift(element)
    return list
    console.log(initialArray);
  }

  const appendEnd:Function =(element:number)=>{
    list.push(element)
    console.log(initialArray);

  }

  const popStart:Function = ()=>{
    initialArray.shift()
    console.log(initialArray);

  }

  const popEnd:Function=()=>{
    initialArray.pop()
    console.log(initialArray);

  }

  const clear:Function =()=>{
    initialArray = [];
    console.log(initialArray);

  }

  const reset:Function = ()=>{
    initialArray = initialArray;
    console.log(initialArray);

  }

  return {list,appendEnd,appendStart,popEnd,popStart,clear,reset}
  // refer readme.md for what to return
};

export default useNumberList;
