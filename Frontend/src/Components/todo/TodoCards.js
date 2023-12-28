import React from 'react'
import './Todo.css';
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

const TodoCards = ({title,body,id,delid,display}) => {
  return (
    <div className="p-3 todo-card">
    <div>
      <h5>{title}</h5>
      <p className='todo-card-p'>{body.split("",77)}...</p>
    </div>
    <div className='d-flex justify-content-around '>
      <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1" onClick={()=>{
    display("block");
   }}>
      <MdEditNote  className="card-icons"/>Edit
      </div>
   <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger " onClick={()=>{
    delid(id);
   }}>
    <MdDelete className="card-icons-del" />Delete
    </div> 
    </div>
    
    </div>
  )
}

export default TodoCards;
