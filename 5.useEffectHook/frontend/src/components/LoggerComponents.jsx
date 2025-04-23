import React, { useEffect, useState } from 'react'

const LoggerComponents = () => {
    const [count ,setCount] = useState(0);

      useEffect(()=>{
       console.log('count is updated and the value is',count)
      })
    
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>
        Increment
      </button>
    </div>
  )
}

export default LoggerComponents
