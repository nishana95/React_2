import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Usestate from './usestate.jsx'
import ColorButton from './color_button.jsx'
import ParentComponent from './parent.jsx'
import ParentButton from './ParentButton.jsx'
import UseEffect from './UseEffect.jsx'
import UserList from './axios.jsx'
import UseMemo from './UseMemo1.jsx'
import UseCallback from './UseCallback1.jsx'
import FilteredList from './FilteredList.jsx'
import FetchDisplay from './FetchDisplay.jsx'


function App() {
  return (
    <>
        <Usestate />
        <ColorButton />
        <ParentComponent />
        <ParentButton />
        <UseEffect />
        <UserList />
        <UseMemo />
        <UseCallback />
        <FilteredList />
        <FetchDisplay />
    </>
  )
}

export default App
