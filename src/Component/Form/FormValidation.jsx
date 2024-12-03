import React, { useState } from "react";
import "../../Style/FormStyle.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const FormValidation = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        const newErrors = { ...errors };

        if (name === "username") {
            if (!value) {
                newErrors.username = "Name is required";
            } else if (value.length < 3) {
                newErrors.username = "Name must be at least 3 characters";
            } else {
                delete newErrors.username;
            }
        }

        if (name === "email") {
            const emailRegex = /\S+@\S+\.\S+/;
            if (!value) {
                newErrors.email = "Email is required";
            } else if (!value.includes("@")) {
                newErrors.email = "Email must contain '@'";
            } else if (!value.includes(".")) {
                newErrors.email = "Email must contain '.'";
            } else if (!emailRegex.test(value)) {
                newErrors.email = "Invalid email format";
            } else {
                delete newErrors.email;
            }
        }

        if (name === "password") {
            if (!value) {
                newErrors.password = "Password is required";
            } else if (value.length < 6) {
                newErrors.password = "Password must be at least 6 characters";
            } else {
                delete newErrors.password;
            }
        }

        if (name === "confirmpassword") {
            if (!value) {
                newErrors.confirmpassword = "Please confirm your password";
            } else if (value !== formData.password) {
                newErrors.confirmpassword = "Passwords do not match";
            } else {
                delete newErrors.confirmpassword;
            }
        }

        setErrors(newErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate field dynamically
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        const newErrors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = `${field[0].toUpperCase() + field.slice(1)} is required`;
            }
        });

        // Validate all fields again before submission
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            // alert("Please fill out all fields before submitting.");
            return;
        }

        const allValid = Object.keys(errors).length === 0;

        if (allValid) {
            setSubmittedData((prevData) => [...prevData, formData]);
            toast.success("Form submitted successfully!");
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmpassword: ""
            });
            setErrors({});
        } else {
            toast.danger("Please correct the errors before submitting.");
        }
    };

    return (
        <div className="form-container">
            <h2>Form Validation</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your Name"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Confirm your Password"
                        value={formData.confirmpassword}
                        onChange={handleChange}
                        className="form-input"
                    />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                </div>

                <button type="submit" className="form-button">Submit</button>
            </form>

            <div className="submitted-data">
                <h2>Submitted Data</h2>
                {submittedData.length > 0 ? (
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submittedData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="no-data">No data submitted yet</p>
                )}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default FormValidation;
