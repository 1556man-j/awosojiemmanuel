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
                  <h2>My Portfolio</h2>
                  <p>
                  I created a personal portfolio website to showcase my projects, skills, and experience as a front-end developer. The website is built using React, React Bootstrap, and other modern web technologies. It features a clean and responsive design, optimized for both desktop and mobile devices.
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  </p>
                  <a href="https://awosojiemmanuel.vercel.app/" className="view-project">
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
                  <h2>E-commerce website</h2>
                  <p>
                  I developed a fully responsive e-commerce website for a local fashion store, featuring a wide range of clothing and accessories. The website was built using HTML, CSS, JavaScript, and Bootstrap, offering a smooth and engaging shopping experience. Users can explore various fashion items, add them to their cart, and seamlessly proceed to checkout.
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
                  <h2>Car Rental</h2>
                  <p>
                  I created a responsive car rental web application that allows users to browse, book, and manage car rentals with ease. The app is built using React, Tailwind CSS, and other modern web technologies, with a special feature that lets users switch between dark and light mode themes for enhanced usability.
                  </p>
                  <p className="icons">
                    <FontAwesomeIcon className="icon" icon={faHtml5} />
                    <FontAwesomeIcon className="icon" icon={faCss3} />
                    <FontAwesomeIcon className="icon" icon={faJs} />
                  </p>
                  <a href="https://car-rental-by-manj.netlify.app/" className="view-project">
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
                  <h2>Faithhill Investment and Logistics Solution</h2>
                  <p>
                  I developed a professional website for Faith Hill Investment & Logistics, a company specializing in comprehensive investment and logistics solutions. The website was built using HTML, CSS, JavaScript, and Bootstrap to create a clean and user-friendly interface that effectively communicates the company's services.
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
