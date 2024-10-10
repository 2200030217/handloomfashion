import { Button } from '../Components/Button';
import { Link,Route,Routes } from 'react-router-dom';
import './mainnavbar.css';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import AdminLogin from "../admin/AdminLogin"
import Registration from './Registration';

export default function MainNavBar({onCustomerLogin,onAdminLogin,onSellerLogin}) {


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        &nbsp;&nbsp;&nbsp;&nbsp;<Link to='/' className='navbar-logo'>
            HANDLOOM
          </Link>
          <ul id='mainnav_ul'>
            <li className='nav-item'>
              <Link to='/home' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactus'
                className='nav-links'
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/customerregistration'
                className='nav-links'
              >
                Sign Up
              </Link>
            </li>
          </ul>
          &nbsp;&nbsp;&nbsp;&nbsp;<Button buttonStyle='btn--outline'>Login</Button>
        </div>
      </nav>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/customerregistration' element={<Registration/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/login' element={<Login onCustomerLogin={onCustomerLogin} onSellerLogin={onSellerLogin}/>}/>
      <Route path='/admin' element={<AdminLogin onAdminLogin={onAdminLogin}/>}/>
      </Routes>
    </>
  )
}
