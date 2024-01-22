import React, { useState } from 'react';
import './Signup2.css';
import HeadingComp from './HeadingComp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import{useNavigate} from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: '', username: '', password: '' });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${windows.location.origin}/api/v1/register`, Inputs);
      if (response.data.message === 'User Already Exists') {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        setInputs({ email: '', username: '', password: '' });
        history("/signin")
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('An error occurred during registration.');
    }
  };

  return (
    <div className="signup">
  <ToastContainer />
  <div className="container">
    <div className="row">
      <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center sign-up-heading">
        <HeadingComp first="Sign" second="Up" />
      </div>
      <div className="col-lg-8 column d-flex justify-content-center align-items-center ">
        <div className="d-flex flex-column w-100 p-5">
          <input
            className="p-2 my-3 input-signup"
            type="email"
            name="email"
            placeholder="Enter your Email"
            onChange={change}
            value={Inputs.email}
          />
          <input
            className="p-2 my-3 input-signup"
            type="text"
            name="username"
            placeholder="Enter your Username"
            onChange={change}
            value={Inputs.username}
          />
          <input
            className="p-2 my-3 input-signup"
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={change}
            value={Inputs.password}
          />
          <button className="btn-signup p-2" onClick={submit}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Signup;
