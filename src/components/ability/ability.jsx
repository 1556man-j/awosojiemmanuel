import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faJsfiddle,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMobileAlt,
  faTerminal,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";

function ability() {
  return (
    <div>
      <div className="ability container-fluid" id="skills">
        <div className="my-experience">
          <p>My Ability</p>
          <h2>Skills & Tools</h2>
        </div>
        <div className="tools">
          <Row>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faHtml5} />
              <h3>Html5</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faCss3} />
              <h3>CSS3</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faJs} />
              <h3>JavaScript</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faReact} />
              <h3>React</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faTerminal} />
              <h3>Command Line</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faUniversalAccess} />
              <h3>Web Accessibility</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faMobileAlt} />
              <h3>Responsive Websites</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faGithub} />
              <h3>Github</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faGitAlt} />
              <h3>Git</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faSass} />
              <h3>SASS</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faJsfiddle} />
              <h3>JQuery</h3>
            </Col>
            <Col xs={4} md={3} lg={2}>
              <FontAwesomeIcon className="tool-icon" icon={faGears} />
              <h3>RESTful ApIs</h3>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ability;
