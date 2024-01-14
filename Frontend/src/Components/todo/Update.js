import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Update = ({ display, update }) => {
  const [Inputs, setInputs] = useState({
    title: undefined,
    body: undefined,
  });

  useEffect(() => {
    // Check if update.title or update.body is undefined before setting the state
    setInputs((prevInputs) => ({
      title: update.title !== undefined ? update.title : prevInputs.title,
      body: update.body !== undefined ? update.body : prevInputs.body,
    }));
  }, [update]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    await axios.put(`http://localhost:1000/api/v2/updateTask/${update._id}`, Inputs).then((response) => {
      toast.success('Your Task Is Updated');
    });

    display('none');
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>
      <input type="text" name="title" className="todo-inputs my-4 w-100 p-3" value={Inputs.title} onChange={change} />
      <textarea className="todo-inputs w-100 p-3" name="body" value={Inputs.body} onChange={change} />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          Update
        </button>
        <button className="btn btn-danger my-4 mx-3" onClick={() => display('none')}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
