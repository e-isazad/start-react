import React from "react"
import Bira from "./components/Bira"
import Album from "./components/Album"

function App() {

  return (
    <React.Fragment>
    <h1 style={{textAlign:'center' ,color:'skyblue'}}>
    HELLO REACT
    </h1>
      <Bira />
      <Album/>
    </React.Fragment> 
  )
}

export default App
