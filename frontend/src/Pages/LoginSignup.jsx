import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] = useState("Login")

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log('Login function executed', formData)
    let responseData;
    await fetch('https://nostalgiafy.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    } else {
      alert(responseData.error)
    }
  }

  const signup = async () => {
    console.log('Signup function executed', formData)
    let responseData;
    await fetch('https://nostalgiafy.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    } else {
      alert(responseData.error)
    }
  }

  return (
    <div className='loginsignup'>
      <div className='login_signup_container'>
        <h1>{state}</h1>
        <div className='login_signup_fields'>
          {state==='Sign Up'?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Enter your name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Enter your email'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Enter your password'/>
        </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
        {state==='Sign Up'?<p className='login_signup_login'>Already a member? <span onClick={()=>{setState('Login')}}>Login here.</span></p>
        :<p className='login_signup_login'>Not a member yet? <span onClick={()=>{setState('Sign Up')}}>Signup here.</span></p>}  
        <div className='login_signup_agree'>
          <input type='checkbox'/>
          <p>By continuing, I agree to the terms of service and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
