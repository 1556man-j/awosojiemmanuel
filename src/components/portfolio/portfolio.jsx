import React from "react";
import { Col, Row, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faGear } from "@fortawesome/free-solid-svg-icons";

function portfolio() {
  return (
    <div>
      <div className="recent-works" id="work">
        <div className="my-recent-works">
          <p>My Portfolio</p>
          <h2>Recent Works</h2>
        </div>
        <div className="works-built">
          <div className="project">
            <Row>
              <Col
                lg={6}
                className="order-lg-1 d-flex align-items-center justify-content-center"
              >
                <div className="img">
                  <img src="/portfolio.png" alt="project" />
                </div>
              </Col>
              <Col lg={6} className="order-lg-2">
                <div className="info">
                  <h2>Phone & accessories store</h2>
                  <p>
                    I was tasked with creating a mobile app for a local phone &
                    accessories store. I used HTML, CSS and JavaScript along
                    with bootstrap to make the website responsive. The app
                    allows users to browse products, add items to their cart,
                    and checkout.
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  </p>
                  <a href="https://manjesusportfolio.netlify.app/" className="view-project">
                    Live Demo
                    <FontAwesomeIcon
                      className="icon"
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="project">
            <Row>
              <Col
                lg={6}
                className="order-lg-2 d-flex align-items-center justify-content-center"
              >
                <div className="img">
                  <img src="/laabb.png" alt="project" />
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="info">
                  <h2>Google Clone</h2>
                  <p>
                  The Google Clone project is a web application that replicates the search engine interface of Google. Built using HTML, CSS, and JavaScript, with API and Bootstrap for styling, the project aims to provide a familiar search experience.
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                    <FontAwesomeIcon className="icon" icon={faGear} />

                  </p>
                  <a href="https://clothing-man-j.vercel.app/" className="view-project">
                    Live Demo
                    <FontAwesomeIcon
                      className="icon"
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="project">
            <Row>
              <Col
                lg={6}
                className="order-lg-1 d-flex align-items-center justify-content-center"
              >
                <div className="img">
                  <img src="/car-rental.png" alt="project" />
                </div>
              </Col>
              <Col lg={6} className="order-lg-2">
                <div className="info">
                  <h2>Quiz App</h2>
                  <p>
                  The Quiz App is an interactive web application designed to provide users with a fun and engaging quiz experience. Built using HTML, CSS, and JavaScript, the app allows users to test their knowledge on various topics..
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  </p>
                  <a href="https://clothing-man-j.vercel.app/" className="view-project">
                    Live Demo
                    <FontAwesomeIcon
                      className="icon"
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="project">
            <Row>
              <Col
                lg={6}
                className="order-lg-2 d-flex align-items-center justify-content-center"
              >
                <div className="img">
                  <img src="/faithhill.png" alt="project" />
                </div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <div className="info">
                  <h2>Explore Space</h2>
                  <p>
                    I was tasked with creating an exploration of the space starting from moon, mars, titan, etc. I used HTML, CSS and JavaScript along with bootstrap to make the website responsive. The app
                    allows users to interact and know more information about the space.
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  </p>
                  <a href="https://faith-hillinvestment.com/" className="view-project">
                    Live Demo
                    <FontAwesomeIcon
                      className="icon"
                      icon={faExternalLinkAlt}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="testimonies">
          <div className="my-clients-say">
            <p>My Clients Say</p>
            <h2>Testimonial</h2>
          </div>
          <Carousel indicators interval={3000} className="carousel">
            {/* First Slide */}
            <Carousel.Item>
              <div className="carousel-item-content">
                <div className="img">
                  <img
                    src="/mmm.png"
                    alt="testimonial"
                  />
                </div>
                <h3>Ada Hill</h3>
                <p>
                  A really good job, all aspect of the project were done well.
                  Very creative and thoughtful. I was very impressed and would
                  recommend this to anyone.
                </p>
              </div>
            </Carousel.Item>

            {/* Second Slide */}
            <Carousel.Item>
              <div className="carousel-item-content">
                <div className="img">
                  <img
                    src="mine.png"
                    alt="testimonial"
                  />
                </div>
                <h3>Jhon Doe</h3>
                <p>
                  A really good job, all aspect of the project were done well.
                  Very creative and thoughtful. I was very impressed and would
                  recommend this to anyone.
                </p>
              </div>
            </Carousel.Item>

            {/* Third Slide */}
            <Carousel.Item>
              <div className="carousel-item-content">
                <div className="img">
                  <img
                    src="me.png"
                    alt="testimonial"
                  />
                </div>
                <h3>Jessica Park</h3>
                <p>
                  A really good job, all aspect of the project were done well.
                  Very creative and thoughtful. I was very impressed and would
                  recommend this to anyone.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
