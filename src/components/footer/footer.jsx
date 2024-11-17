import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function footer() {
  return (
    <div>
       <div className="footer">
            <h1>Man J</h1>
            <div className="lower-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="social">
                <a href="https://www.facebook.com/itzprince.abdul.1253"><FontAwesomeIcon className='icon' icon={faFacebook}/></a>
                <a href="https://www.instagram.com/manjesus01?gsh=YzIjYTk1ODg3Zg=="><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
                <a href="https://x.com/ManJesus7?t=m4vgJ6-tOVIf5quSzsBtbA&s=09"><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
                <a href="https://www.linkedin.com/in/awosoji-emmanuel-9407222b8"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
            </div>
            <p className="man-j">© 2024 | Designed & coded with 💙 by Awosoji Emmanuel (aka Man J)</p>
        </div>
    </div>
  )
}

export default footer
