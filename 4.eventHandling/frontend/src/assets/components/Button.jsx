import React from 'react'
import './Button.css'
const Button = () => {
   
  return (
    <div>
      <button id='btn' onClick={()=>{alert('you clicked Me!')}}>
      I don't do anything
     </button>
    </div>
  
  )
}

export default Button
