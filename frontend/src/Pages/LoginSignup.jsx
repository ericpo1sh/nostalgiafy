import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className='login_signup_container'>
        <h1>Sign up</h1>
        <div className='login_signup_fields'>
          <input type='text' placeholder='Enter your name'/>
          <input type='email' placeholder='Enter your email'/>
          <input type='password' placeholder='Enter your password'/>
        </div>
        <button>Continue</button>
        <p className='login_signup_login'>Already a member? <span>Login here</span></p>
        <div className='login_signup_agree'>
          <input type='checkbox'/>
          <p>By continuing, I agree to the terms of service and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
