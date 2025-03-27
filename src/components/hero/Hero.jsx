import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState, useMemo } from "react";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const words = useMemo(() => ["Frontend Developer", "Software Engineer", "UI/UX Designer"], []);

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 2000; // Time before starting to erase the word

  useEffect(() => {
    let timer;

    if (!isErasing && charIndex < words[wordIndex].length) {
      // Typing effect
      timer = setTimeout(() => {
        setText((prev) => prev + words[wordIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isErasing && charIndex > 0) {
      // Erasing effect
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, erasingSpeed);
    } else if (!isErasing && charIndex === words[wordIndex].length) {
      // Word typed completely, start erasing after a delay
      timer = setTimeout(() => {
        setIsErasing(true);
      }, delayBetweenWords);
    } else if (isErasing && charIndex === 0) {
      // Word erased completely, move to the next word
      setIsErasing(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isErasing, wordIndex, words]);

  return (
    <div>
      <div className="home" id="home">
        <div className="info">
          <p>Hello, I'm</p>
          <h2>Awosoji Emmanuel</h2>
          <div className="text-container">
            <span id="animated-text">{text}</span>
            <span className="cursor">|</span>
          </div>
          <div className="info-button">
            <a
              href="https://drive.google.com/file/d/1mfkZ9D1WKmIgcfC0HZPtCrjmme4URzRH/view?usp=drive_link"
              className="cv"
            >
              Download CV
            </a>
            <a href="#about" className="about">
              About
            </a>
          </div>
        </div>
        <div className="information">
          <div className="links up">
            <li>
              <a href="https://www.linkedin.com/in/awosoji-emmanuel-9407222b8">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/1556man-j">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/manjesus01?gsh=YzIjYTk1ODg3Zg==">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </div>
          <div className="my-pic">
            <img src="/user8.JPG" alt="me" />
          </div>
          <div className="scroll up">
            <li>
              <FontAwesomeIcon icon={faComputerMouse} />
            </li>
            <li className="vert">Scroll Down</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
