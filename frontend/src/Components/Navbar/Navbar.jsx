import React from 'react'
import './Navbar.css'
import logo_with_tagline from '../Assets/nostalgiafy_with_tagline.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo_with_tagline} width={'400px'} height={'100px'}></img>
      </div>
      <div className='nav-menu'>
        <li>Store</li>
        <li>About</li>
        <li>Checkout</li>
        <li>Login</li>
      </div>
    </div>
  )
}

export default Navbar
