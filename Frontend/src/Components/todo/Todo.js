import React, { useState } from 'react'
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
const Todo = () => {
  const [Inputs, setInputs] = useState({title:"",body:""});
  const [Array, setArray] = useState([]);
const del = (id) =>{
  Array.splice(id,"1")
  setArray([...Array])
}
const show=()=>{
   document.getElementById("textarea").style.display ="block";
}
 const change= (e)=>{
      const{name,value}= e.target;
      setInputs({...Inputs,[name]:value})
 }
 const submit = () => {
  if (Inputs.title === "" || Inputs.body === "") {
    toast.error("Please Enter Body & Title");
  } else {
    setArray([...Array, Inputs]);
    setInputs({ title: "", body: "" });
    toast.success("Your task is added");
    toast.error("Please SignUp");
  }
};

 const dis =(value) =>{
  console.log(value);
  document.getElementById("todo-update").style.display = value;
 }
 console.log(Array);
  return (
    <>
    <div className="todo">
      <ToastContainer/> 
        <div className="todo-main container d-flex justify-content-center allig-items-center my-4 ">
            <div className="d-flex flex-column todo-inputs-div p-1">
            <input type="text" placeholder="TITLE" className="my-2 p-2 todo-inputs" onClick={show} name="title" value = {Inputs.title} onChange={change} />
            <textarea 
            type="text" 
            placeholder="BODY"
             name="body" 
             className="p-2 todo-inputs" 
              value = {Inputs.body}
              onChange={change}
               id="textarea"/>
            <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
            </div>
            
           
        </div>
        <div className="todo-body">
          <div className="container">
            <div className="row">
               
            {Array && Array.map((item, index) => (<div className='col-lg-3 col-8 mx-5 my-2' key={index}>
              <TodoCards title={item.title} body={item.body} id={index} delid={del} display={dis}/>
              </div>)
            )}
            
            </div>
            
            
           
          </div>
        </div>
        
    </div>
    <div className="todo-update bg-success " id="todo-update">
      <div className="container">
        <Update display={dis}/>
        </div>
        </div>
    </>
  )
}

export default Todo
