import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponents from './components/LoggerComponents';
import TimerComponent from './components/TimerComponent';
import DataFetcher from './components/DataFetcher';
import ResizeComponent from './components/ResizeComponent';
import MultiEffectComponent from './components/MultiEffectComponent';

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0);
  //type1 useEffect
  // useEffect(()=>{
  //   alert("i will run on each and every render")
  // })

  //type2 useEffect
  // useEffect(()=>{
  //   alert('i will run on first render')
  // }, [])
  
  //type 3 useEffect

  // useEffect(()=>{
  //   alert('you are trying to update count')
  // },[count])

  //type 4 useEffect
  //  useEffect(()=>{
  //   alert('running when any dependencies is being updated')
  //  },[count,total])

  //type 5 useEffect

  // useEffect(()=>{
  //   alert('count is updated')
     
  //   return()=>{
  //     alert(' previous count is unmounted from UI')
  //   }
  // },[count])

   function handleCount(){
    setCount(count+1);
   }
   
  

  return (
   <div>
     {/* <button onClick={handleCount}>countTotal</button>
     <br />
     count:{count}
     <br />
     <button onClick={()=>{setTotal(total+1)}}>Total Value</button>
     <br />
     Total:{total} */}

     {/* <LoggerComponents/>
     <TimerComponent/> */}
     {/* <ResizeComponent/> */}
     <MultiEffectComponent/>
   </div>
  )
}

export default App
