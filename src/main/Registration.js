import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CustomerRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      setError("");
      return;
    }
    try {
      const response = await axios.post('http://localhost:2563/registercustomer', formData);
      if (response.data) {
        setMessage("Registration Successful");
        setError("");
        navigate("/customerhome");
      } else {
        setMessage("Registration Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className='logincontainer'>
      <h1>Register</h1>
      {
        message ? <h4 align="center" color='white'>{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <input type='text' id="name" value={formData.name} onChange={handleChange} placeholder='Enter Name' required></input>
        </div>
        <div className='input-box'>
          <input type='email' id="email" value={formData.email} onChange={handleChange} placeholder='Enter Email' required></input>
        </div>
        <div className='input-box'>
          <input type='password' id="password" value={formData.password} onChange={handleChange} placeholder='Enter Password' required></input>
        </div>
        <div className='input-box'>
          <input type='password' id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' required></input>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Register</p></Button>
        <div className='register-link'>
          <p>Already have an account? <a href='/customerlogin'>Login Here</a></p>
        </div>
      </form>
    </div>
  );
}
