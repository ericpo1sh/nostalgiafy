import React from 'react'
import './CSS/About.css'
import github_logo from '../Components/Assets/githublogo.png'
import linkedin_logo from '../Components/Assets/linkedinlogo.webp'
import mail_icon from '../Components/Assets/mail-icon.png'
import puzzle from '../Components/Assets/puzzle.jpg'
import eric from '../Components/Assets/eric.jpg'

const About = () => {
  return (
    <div className='about-container'>
      <div className='people-container'>
        <div className='eric-container'>
          <img className='eric-img' src={eric} width={'350px'} height={'240px'}></img>
          <p className='Nametag'>Eric Dzyk</p>
          <div className='about-me'>
            <p>Hi, im Eric. I'm a full-stack web developer with a passion for creating user-friendly applications. I specialize in front-end/back-end development and react applications.</p>
          </div>
          <p className='connect'>Connect with me!</p>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/ericdzyk'><img className='linkedin' alt='' src={linkedin_logo} width={'25px'} height={'25px'}></img></a>
            <a href='mailto:ericpo1sh@gmail.com'><img className='mail' alt='' src={mail_icon} width={'25px'} height={'25px'}></img></a>
            <a href='https://github.com/ericpo1sh'><img className='github' alt='' src={github_logo} width={'25px'} height={'25px'}></img></a>
          </div>
          <a className='website' href='http://ericdzyk.com'>Visit my website</a>
          <div className='ratings'><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521" width={'100px'}></img></div>
          <div className='purchase-container'>
            <div className='priceless'><p>Priceless</p></div>
            <div className='add-to-cart'><button>Add to cart</button></div>
          </div>
        </div>
        <div className='puzzle-container'>
        <img className='puzzle-img' src={puzzle} width={'350px'} height={'240px'}></img>
          <p className='Nametag'>Michael Moser</p>
          <div className='about-me'>
            <p>Hi, im Michael. I'm a full-stack web developer with a passion for creating responsive and accessible websites. I specialize in front-end/back-end development.</p>
          </div>
          <p className='connect'>Connect with me!</p>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/puzzlemoser/'><img className='linkedin' alt='' src={linkedin_logo} width={'25px'} height={'25px'}></img></a>
            <a href='mailto:EmptyMPuzzle@gmail.com'><img className='mail' alt='' src={mail_icon} width={'25px'} height={'25px'}></img></a>
            <a href='https://github.com/PuzzleEmptyM'><img className='github' alt='' src={github_logo} width={'25px'} height={'25px'}></img></a>
          </div>
          <a className='website' href='https://hirepuzzle.com'>Visit my website</a>
          <div className='ratings'><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/5_stars.png?20240808184521" width={'100px'}></img></div>
          <div className='purchase-container'>
            <div className='priceless'><p>Priceless</p></div>
            <div className='add-to-cart'><button>Add to cart</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
