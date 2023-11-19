import React from 'react'
import ButtonAppBar from './components/Navbar'
import TopIndex from './components/Main/Top'
import CenterIndex from './components/Main/Center'
import FooterIndex from './components/Main/Footer'


const App = () => {
  return (
    <React.Fragment>
      <ButtonAppBar />
      <TopIndex />
      <CenterIndex />
      <FooterIndex/>
    </React.Fragment>
  )
}

export default App