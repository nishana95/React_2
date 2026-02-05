import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Usestate from './usestate.jsx'
import ColorButton from './color_button.jsx'
import ParentComponent from './parent.jsx'
import ParentButton from './ParentButton.jsx'


function App() {


  return (
    <>
        <Usestate />
        <ColorButton />
        <ParentComponent />
        <ParentButton />
    </>
  )
}

export default App
