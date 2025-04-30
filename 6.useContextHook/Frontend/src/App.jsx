import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildA from './components/ChildA'
import './App.css'
//create context
// const userContext = createContext();

const themeContext = createContext();

function App() {
  // const [user,setUser] = useState({name:"saurav"});
  const [theme,setTheme] = useState('light');

  return (
    // who can access 
    <>
     {/* <userContext.Provider value={user}>
       <ChildA/>
     </userContext.Provider> */}
    
      <themeContext.Provider value={{theme,setTheme}}>
        <div className='container'style={{backgroundColor:theme==='light'?"beige":"black"}}>
          <ChildA/>
        </div>
      </themeContext.Provider>
    
    </>
   
  )
}

export default App
// export {userContext}
export {themeContext}
