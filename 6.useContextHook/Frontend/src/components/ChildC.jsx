import React, { useContext } from 'react'
import { themeContext } from '../App'


const ChildC = () => {

   const {theme,setTheme} = useContext(themeContext);
   function toggleButton(){
      if(theme==='light'){
        setTheme('dark');
      }
      else{
        setTheme('light');
      }
   }
  return (
    <div>
      <button onClick={toggleButton}>click Me</button>
    </div>
  )
}

export default ChildC
