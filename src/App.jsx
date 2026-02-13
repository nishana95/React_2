import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./About.jsx"
import Contact from "./Contact.jsx"
import Home from "./Home.jsx"
import Navbar from "./Navigation.jsx"
import Dashboard from './Dashboard.jsx'
import Settings from './Settings.jsx'
import Profile from './Profile.jsx'
import User from './User.jsx'
import Post from './Post.jsx'
import Blog from './blog.jsx'
import UserRedux from './UserRedux.jsx'
import ReduxToolkit from './ReduxToolkit'
import ContextAPI from './ContextAPI.jsx'
import ThemeSetting from './ThemeContext.jsx'
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
import ControlledForms from './ControlledForms.jsx'
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
        {/* <ControlledForms />  */}
        {/* <FormValidation /> */}
        {/* <Pagination /> */}
        {/* <LoginForm /> */}
        {/* <FetchDisplayPagination />  */}
        {/* <ContextAPI/> */}
        {/* <ThemeSetting/> */}
        {/* <UserRedux/> */}
        <ReduxToolkit/>
        
          <BrowserRouter>
              <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ab" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/dashboard" element={<Dashboard />} >
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="/user/:id" element={<User/>}/>
              <Route path="/blog" element={<Blog />} >
                <Route path=":id" element={<Post />} />
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
