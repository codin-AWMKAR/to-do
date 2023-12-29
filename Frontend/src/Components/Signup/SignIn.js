import React from 'react'
import { useState } from 'react';
import"./Signup.css"
import HeadingComp from './HeadingComp'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux'
import{authActions} from "../../store/index";
 

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: '', password: '' });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1000/api/v1/signin', Inputs);
      sessionStorage.setItem("id",response.data.others._id);
           dispatch(authActions.login())
      history("/todom");
      
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred during registration.');
    }
  };
  return (
    <div className="signup">
      <ToastContainer/>
    <div className="container">
        <div className="row">
        <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center sign-up-heading" >
               <HeadingComp first="Sign" second="In"/></div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
                <div className=" d-flex flex-column w-100 p-5">
                <input 
                className="p-2 my-3 input-signup" 
                type="email" 
                name="email"
                placeholder="Enter your Email"
                value={Inputs.email} 
                onChange={change}
                />
                  <input 
                className="p-2 my-3 input-signup" 
                type="password" 
                name="password"
                placeholder="Enter your Password" 
                value={Inputs.password}
                onChange={change}
                />
                <button className="btn-signup p-2" onClick={submit}>Sign In</button>
                </div>
            </div>
           
        </div>
    </div>
  
</div>
  )
}

export default SignIn

