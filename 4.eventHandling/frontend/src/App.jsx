import AlertButton from "./assets/components/AlertButton"
import Button from "./assets/components/Button"
import PlayButton from "./assets/components/PlayButton"
import UploadButton from "./assets/components/UploadButton"
import './App.css'

function App() {

 
  return ( 
    <div>
      <Button></Button>
      <p>Event handling by passing props to Alert <br /> button component <br /></p>
     <AlertButton message="playing">
       play Movie
     </AlertButton>
     <AlertButton message='uploading'>
      upload image
     </AlertButton>
     <p>Passing Event Handler As Props</p>
     <PlayButton movieName='dil tu jaan tu'/>
     <UploadButton/>
     <p>demonstration of bubbling up/propagation of event. <bold>
      Take challenge as to stop bubbling <i>contribute.</i></bold></p>
     <div className="toolbar" onClick={()=>{alert('you clicked on toolbar')}}>
      <button id='btn'onClick={(e)=>{alert('playing')
        e.stopPropagation()
      }}>play movie</button> 
      <button id='btn'onClick={(e)=>{alert('uploading')
        e.stopPropagation()
      }}>upload image</button>
     </div>
     <p>Trying to execute event handler e.preventDefault():</p>
     <form onSubmit={e=>
     {e.preventDefault()
      alert('Do you want to submit the form')
     }}>
      <input type="text" />
      <button>Send</button>
     </form>
    </div>
  )
}

export default App
