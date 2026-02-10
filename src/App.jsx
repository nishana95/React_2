import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Usestate from './usestate.jsx'
import ColorButton from './color_button.jsx'
import ParentComponent from './parent.jsx'
import ParentButton from './ParentButton.jsx'
import DataFetcher from './UseEffect.jsx'
import UserList from './axios.jsx'
import UseMemo from './UseMemo1.jsx'
import UseCallback from './UseCallback1.jsx'
import FilteredList from './FilteredList.jsx'
import FetchDisplay from './FetchDisplay.jsx'
import Form from './form.jsx'
import FormValidation from './formvalidation.jsx'
import Pagination from './pagination.jsx'
import Grid from './grid.jsx'
import LoginForm from './LoginForm.jsx'
import FetchDisplayPagination from './FetchDisplay_Pagination.jsx'


function App() {
  return (
    <>
        {/* <Usestate />
        <ColorButton />
        <ParentComponent />
        <ParentButton />
        <DataFetcher />
        <UserList />
        <UseMemo />
        <UseCallback />
        <FilteredList />*/}
        {/* <FetchDisplay /> */}
        {/* <Grid /> */}
        {/* <Form />  */}
        {/* <FormValidation /> */}
        {/* <Pagination /> */}
        <LoginForm />
        <FetchDisplayPagination /> 

    </>
  )
}

export default App
