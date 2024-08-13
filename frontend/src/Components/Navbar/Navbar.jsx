import React from 'react'
import './Navbar.css'
import logo_with_tagline from '../Assets/nostalgiafy_with_tagline.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo_with_tagline} width={'400px'} height={'100px'}></img>
      </div>
      <div className='nav-menu'> 
        <li><Link className='link' to='/nostalgiafy'>Store</Link></li>
        <li><Link className='link' to='/nostalgiafy/About'>About</Link></li>
        <li><Link className='link' to='/nostalgiafy/Checkout'>Checkout</Link></li>
        {localStorage.getItem('auth-token')
        ?<li onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/nostalgiafy')}}>Logout</li>
        :<li><Link className='link' to='/nostalgiafy/Login'>Login</Link></li>}
      </div>
    </div>
  )
}

export default Navbar
