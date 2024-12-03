import React from 'react'
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormToastify = () => {

    
    const handleChange = (e) => {
        e.preventDefault();
        
        toast.success("hello haniya", {autoClose:1000})
        
    }
  return (
    <div>
        <form action="">
          <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your Name"    
                    className="form-input"
                />
                <button onClick={handleChange}>Submit</button>
            </div>
         </form>
         <ToastContainer/>
    </div>
  )
}

export default FormToastify