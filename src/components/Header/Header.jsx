import React from 'react'
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    const register = () => {
        navigate('/register')
    }

  return (
    <nav className='header'>
        <ul className='header-navs'>
        <img src={Logo} alt="" />
            <div className="nav-items">
            <li>Home</li>
            <li>Post Ad</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Category</li>
            <li>Listing</li>
            <div className="reg-buttons">
            <button onClick={login} className='login-button'>LOGIN</button>
            <button onClick={register} className='register-button'>REGISTER</button>
            </div>
            </div>
        </ul>
    </nav>
  )
}

export default Header