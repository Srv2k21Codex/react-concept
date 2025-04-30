import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,reset,incrementByAmount} from './features/counter/counterSlice';

function App() {
  const [amount,setAmount]=useState(0);
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  
  function handleIncrementClick(){
     dispatch(increment());
  }
  function handleDecrementClick(){
     dispatch(decrement());
  }

  return (
    <div>
      <button className='increment-btn'onClick={handleIncrementClick}>+</button>
      <p>count:{count}</p>
      <button className='decrement-btn'onClick={handleDecrementClick}>-</button>
      <div>
        <input className='user-input'type="number"
        
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}/>
        <button className='incrementByAmt' onClick={()=>dispatch(incrementByAmount(amount))}>Add Amount</button>
        <button className='reset-btn' onClick={()=>dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default App
