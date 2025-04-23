import React from 'react'

const Element = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value) }/>
      <p>This is input in child component and input is:{props.name}</p>
    </div>
  )
}

export default Element
