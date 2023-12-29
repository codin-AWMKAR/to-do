import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import SignIn from './Components/Signup/SignIn';
import Todo from './Components/todo/Todo';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import{authActions} from "./store/index";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   const id = sessionStorage.getItem("id");
   if(id){
    dispatch(authActions.login())
   }
  
  
    
  },[])
  
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact  path="/" element={<Home/>}/>
        <Route exact  path="/signup" element={<Signup/>}/>
        <Route exact  path="/signin" element={<SignIn/>}/>
        <Route exact  path="/todom" element={<Todo/>}/>

        
      </Routes>
      </Router>
      
      
      <Footer/>
    </div>
  )
}

export default App
