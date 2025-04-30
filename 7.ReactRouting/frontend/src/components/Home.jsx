import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const GoToDashBoard = ()=>{
        navigate('/dashboard')
    }
  return (
    <div>
      Home Page
      <button onClick={GoToDashBoard}>GoToDashBoard</button>
    </div>
  )
}

export default Home
