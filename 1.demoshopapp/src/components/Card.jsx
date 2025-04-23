import React from 'react'
import "tailwindcss";
import images from "../assets/images.jpeg"
import "./Card.css"

const Card = (props) => {
  return (
    
    <div className='user-card ' style = {{"border-radius" :"29px"}}>
     <p className='user-name'>{props.name}</p>
     <img id='img'src={props.image} alt="img" />
     <p className='user-desc'>{props.desc}</p>
  </div>
  
  )
}
  
export default Card
