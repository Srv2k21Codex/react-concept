import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count,setCount] = useState(0);
    const [seconds,setSecond] = useState(0);
    //renders when count is modified
    useEffect(()=>{
      console.log("value of count is:",count);
    },[count])
    //it will render once
    useEffect(()=>{
      const timeInterval = setInterval(()=>{
        setSecond(prevSeconds => prevSeconds + 1)
      },1000);
      return()=>{
        clearInterval(timeInterval);
      }
    },[])
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>increment</button>
      <h2>second:{seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
