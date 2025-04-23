import { useState } from "react"
import Element from "./components/Element"
import Panel from "./components/Panel";
import FilterableList from "./components/FilterableList";



function App() {

  // const [name,setName] = useState('');
  const[isActive,setIsActive]=useState(0);

  return (
    <div>
     <h2>Almaty, kazakhstan</h2>
     <Panel title="about" activeIndex={isActive === 0} 
     onShow = {()=>setIsActive(0)}>
     With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, 
     it was its capital city.
     </Panel>

     <Panel title="etymology" activeIndex={isActive === 1}
      onShow={()=>setIsActive(1)}>
     The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is 
     often translated as "full of apples". In fact, the region surrounding Almaty is thought to be 
     the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a 
     likely candidate for the ancestor of the modern domestic apple.
     </Panel>
     <FilterableList/>
    
    </div>
  )
}

export default App
