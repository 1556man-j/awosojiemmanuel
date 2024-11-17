import { faBriefcase, faHeadset, faMedal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function about() {
  return (
    <div>
       <div classNameName="container">
            <div className="about" id="about">
                <div className="top">
                    <p>My Intro</p>
                    <h2>About Me</h2>
                </div>
                <Row className="both">
                    <Col lg={4} className="left">
                        <div className="img">
                            <img src="/me.png" alt="me"/>
                        </div>
                    </Col>
                    <Col lg={8} className="right">
                        <Row className="middle">
                            <div className="experience">
                                <FontAwesomeIcon icon={faMedal}/>
                                <h3>Experience</h3>
                                <p>3 Years Working</p>
                            </div>
                            <div className="completed">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h3>Completed</h3>
                                <p>12+ Projects</p>
                            </div>
                            <div className="support">
                                <FontAwesomeIcon icon={faHeadset}/>
                                <h3>Support</h3>
                                <p>Online 24/7</p>

                            </div>
                        </Row>
                        <div className="bottom">
                            <p className="what-i-do">Frontend Developer. I create web pages with UI?UX user interfaces, i
                                have years of experience and many clients are happy with the work i did.</p>
                            <a className="btn-to-contact-me" href="#contact">Contact Me</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default about
