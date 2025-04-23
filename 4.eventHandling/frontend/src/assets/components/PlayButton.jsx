import React from 'react'

const PlayButton = ({movieName}) => {
    function handlePlayClick(){
        alert(`playing ${movieName}!`)
    }
  return (
   <button id='btn' onClick={handlePlayClick}>
    play "{movieName}"
   </button>
  )
}

export default PlayButton
