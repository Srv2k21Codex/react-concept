import React, { useState } from 'react'
import Card from './components/Card'
import image2 from './assets/image2.jpeg'
import image3 from './assets/image3.jpeg'
import image4 from './assets/image4.jpeg'
import Counter from './components/Counter'
import Propps from './components/Propps'
import Button from './components/Button'




const App = (props) => {
  const [count ,setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }
  return (
    <div className='flex flex-col gap-20 justify-center items-center'>
      
      <div className='flex flex-wrap gap-[20px] ' style={props.style}>
        <Card name='saurav' desc='B.tech CSE 2021-2025' image={image2}/>
        <Card name='kranti' desc='B.tech EEE 2021-2025' image={image3}/>
        <Card name='vikram' desc='B.tech Civil 2021-2025'image={image4}/>
      </div>
      <div>
        <Counter/>
        <Propps>
          {/* all the attribute or element written withing the component is called children and can be access 
          using {props.children} */}
          <h1>my name is saurav kumar</h1>
          <p>i am consistent and progressing in learning react</p>
        </Propps>
        <Button increment = {increment} text = "click Me">
          <h1> {count} </h1>
        </Button>
      </div>
     
    </div>
  )
}

export default App
