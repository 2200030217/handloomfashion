import React,{ useState }  from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function AdminLogin({onAdminLogin}) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
            onAdminLogin(); // this will invoke onAdminLogin() in App.js
            
            navigate("/adminhome");
      };
  return (
    <div className='logincontainer'>
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <div className='input-box'>
          <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Enter Username' required></input>
        </div>
        <div className='input-box'>
          <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='Enter Password' required></input>
        </div>
        <div className='remember-forgot'>
        </div>
        <Button variant="outlined" type='submit' className="btn"><p>Login</p></Button>
        </form>
    </div>
  )
}
