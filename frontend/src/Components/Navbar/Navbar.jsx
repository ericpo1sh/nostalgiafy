import React from 'react'
import './Navbar.css'
import logo_with_tagline from '../Assets/nostalgiafy_with_tagline.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react'
import menu_open from '../Assets/menu_open.svg'
import menu_close from '../Assets/menu_close.svg'

const Navbar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-400px";
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo_with_tagline}></img>
      </div>
      <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt=''></img>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt=''></img>
        <li><Link className='link' to='/'>Store</Link></li>
        <li><Link className='link' to='/About'>About</Link></li>
        <li><Link className='link' to='/Checkout'>Checkout</Link></li>
        {localStorage.getItem('auth-token')
        ?<li onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</li>
        :<li><Link className='link' to='/Login'>Login</Link></li>}
      </ul>
    </div>
  )
}

export default Navbar
