import React, { useState } from 'react'
import "./Todo.css"
const Todo = () => {
  const [Inputs, setInputs] = useState({title:"",body:""});
  const [Array, setArray] = useState([]);

const show=()=>{
   document.getElementById("textarea").style.display ="block";
}
 const change= (e)=>{
      const{name,value}= e.target;
      setInputs({...Inputs,[name]:value})
 }
 const submit =()=>{
  setArray([...Array,Inputs])
  setInputs({title:"",body:""})
 };
 console.log(Array);
  return (
    <div className="todo">
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
        <div className="todo-body"></div>
        
    </div>
  )
}

export default Todo
