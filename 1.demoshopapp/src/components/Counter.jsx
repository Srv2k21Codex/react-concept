import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
       <div className='counter-container'>
         <p id='cnt'>You Clicked {count} times</p>
         <button onClick={()=>{setCount(count+1)}}>Click Me</button>
       </div>
    </div>
  )
}

export default Counter
