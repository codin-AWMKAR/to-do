import React, { useEffect, useState } from 'react';
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from "axios";

let toUpdateArray = [];
let id = sessionStorage.getItem("id");
console.log(id);

const Todo = () => {
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const del = async (Cardid) => {
    if (id) {
      await axios.delete(`http://localhost:1000/api/v2/deleteTask/${Cardid}`, { data: { id: id }, }).then(() => {
        toast.success("Your task is deleted");
      });
    }
  }

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  }

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value })
  }

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Please Enter Body & Title");
    } else {
      if (id) {
        await axios.post(`http://localhost:1000/api/v2/addTask`, { title: Inputs.title, body: Inputs.body, id: id }).then((response) => { console.log(response) });

        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
        
      }
    }
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo-update").style.display = value;
  }

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        
        await axios.get(`http://localhost:1000/api/v2/getTasks/${id}`).then((response) => {
          setArray(response.data.list);
        });
      };
      fetch();
    }
  }, [submit]);

  const update = (value) => {
    toUpdateArray = Array[value];
  }

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center allig-items-center my-4 ">
          <div className="d-flex flex-column todo-inputs-div w-100 p-1">
            <input type="text" placeholder="TITLE" className="my-2 p-2 w-100  todo-inputs" onClick={show} name="title" value={Inputs.title} onChange={change} />
            <textarea
              type="text"
              placeholder="BODY"
              name="body"
              className="p-2 todo-inputs w-100"
              value={Inputs.body}
              onChange={change}
              id="textarea" />
            <button className="home-btn w-100 px-2 py-1" onClick={submit}>Add</button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container">
            <div className="row">
              {Array && Array.map((item, index) => (
                <div className='col-lg-3 col-11 mx-lg-5 my-2' key={index}>
                  <TodoCards
                    title={item.title}
                    body={item.body}
                    id={item._id}
                    delid={del}
                    display={dis}
                    updateId={index}
                    toBeUpdate={() => {
                      console.log("Updating:", item);
                      update(index);
                    }}
                  />
                </div>)
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update bg-success " id="todo-update">
        <div className="container">
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </>
  )
}

export default Todo;
