import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Headeridx from './components/Header'
import What from './components/Main/What'
import Offer from './components/Main/Offer'
import Welcomex from './components/Main/Welcome'
import Buttons from './components/Main/Buttons'
import Iframexx from './components/Main/İframe'

function App() {

  return (
    <React.Fragment>
      <Headeridx/>
      <What/>
      <Offer/>
      <Welcomex/>
      <Buttons/>
      <Iframexx/>
    </React.Fragment>
  )
}

export default App
