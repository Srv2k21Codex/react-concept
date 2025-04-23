import React, { useState } from 'react'

import './Panel.css'


  const Panel = ({
    activeIndex,
    onShow,
    title,
    children
  }) => {
   
  return (
    <div className='panel-container'>
      <h3>{title}</h3>
      {activeIndex ? (<p>{children}</p>):
      (<button onClick={onShow}> 
        show 
      </button>)}
    </div>
  )
}

export default Panel
