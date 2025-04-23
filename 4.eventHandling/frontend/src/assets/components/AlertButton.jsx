import React from 'react'

const AlertButton = ({children,message}) => {
  return (
    <div>
      <button id='btn'onClick={()=>{alert(message)}}>{children}</button>
    </div>
  )
}

export default AlertButton
