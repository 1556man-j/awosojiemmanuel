import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faHome, faLaptop, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function sticky() {
  return (
    <div>
      <div className="fixed-nav">
            <div className="static">
                <li><a href="#home"><FontAwesomeIcon icon={faHome} /></a></li>
                <li><a href="#about"><FontAwesomeIcon icon={faUser}/></a></li>
                <li><a href="#skills"><FontAwesomeIcon icon={faLaptop} /></a></li>
                <li><a href="#work"><FontAwesomeIcon icon={faBriefcase} /></a></li>
                <li><a href="#contact"><FontAwesomeIcon icon={faMessage}/></a></li>
            </div>
        </div>
    </div>
  )
}

export default sticky
