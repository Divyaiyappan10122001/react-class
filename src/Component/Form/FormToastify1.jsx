import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Style/FormToastify1.scss'

function FormToastify1() {
    const [formData, setFormData] = useState({ name: '', age: '', email: '' });
    const [tableData, setTableData] = useState([]);
    const [errors, setErrors] = useState({ name: '', age: '', email: '' });

    const handleValidation = (name, value) => {
        let errorMsg = '';
        if (name === 'name') {
            if (!/^[a-zA-Z ]+$/.test(value)) {
                errorMsg = 'Name should contain only letters.';
            } else if (value.length < 3) {
                errorMsg = 'Name must be at least 3 characters.';
            }
        } else if (name === 'age') {
            if (!value) {
                errorMsg = 'Age is required.';
            } else if (isNaN(value)) {
                errorMsg = 'Age must be a number.';
            }
        } else if (name === 'email') {
            if (!/\S+@\S+\.\S+/.test(value)) {
                errorMsg = 'Invalid email format.';
            }
        }
        setErrors({ ...errors, [name]: errorMsg });
    };
   // handlechange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        handleValidation(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((error) => error !== '');
        const isEmpty = Object.values(formData).some((value) => value === '');

        if (isEmpty) {
            toast.warning('All fields are required!',  {autoClose:1000});
            return;
        }
        if (hasErrors) {
            toast.error('Please fix the errors before submitting!', {autoClose:1000});
            return;
        }

        setTableData([...tableData, formData]);
        setFormData({ name: '', age: '', email: '' });
        setErrors({ name: '', age: '', email: '' });
        toast.success('Form submitted successfully!',  {autoClose:1000});
    };

    return (
        <div>
            <h1>Form with Validation and Table</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
                <div>
                    <input
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
                </div>
                <div>
                    <input
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
}

export default FormToastify1;
